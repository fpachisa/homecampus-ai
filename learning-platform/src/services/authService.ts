import {
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  signInWithPopup,
  signOut,
  type User as FirebaseUser,
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc, collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';
import { auth, googleProvider, firestore } from './firebase';
import { emailService } from './emailService';
import type { UserProfile } from '../types/user';

/**
 * Authentication Service
 * Handles passwordless email link authentication and Google sign-in
 */
class AuthService {
  /**
   * Send verification email link for sign in/sign up
   */
  async sendVerificationEmail(email: string): Promise<void> {
    try {
      const actionCodeSettings = {
        // URL to redirect to after email link click
        url: window.location.origin + '?emailSignIn=true',
        handleCodeInApp: true,
      };

      await sendSignInLinkToEmail(auth, email, actionCodeSettings);

      // Save email to localStorage for email link completion
      window.localStorage.setItem('emailForSignIn', email);
    } catch (error: any) {
      console.error('Send email error:', error);
      throw this.handleAuthError(error);
    }
  }

  /**
   * Complete sign in with email link
   */
  async completeEmailSignIn(email: string, emailLink?: string): Promise<FirebaseUser> {
    try {
      const link = emailLink || window.location.href;

      // Confirm the link is a sign-in with email link
      if (!isSignInWithEmailLink(auth, link)) {
        throw new Error('Invalid verification link');
      }

      // Sign in with email link
      const userCredential = await signInWithEmailLink(auth, email, link);

      // Clear email from localStorage
      window.localStorage.removeItem('emailForSignIn');

      // Check if this is a new user (profile doesn't exist)
      const profileExists = await this.userProfileExists(userCredential.user.uid);

      if (!profileExists) {
        // Create minimal profile - user will complete setup next
        await this.createMinimalProfile(userCredential.user);
      } else {
        // Update last login for existing users
        await this.updateLastLogin(userCredential.user.uid);
      }

      return userCredential.user;
    } catch (error: any) {
      console.error('Email sign in error:', error);
      throw this.handleAuthError(error);
    }
  }

  /**
   * Get saved email from localStorage (for email link flow)
   */
  getSavedEmail(): string | null {
    return window.localStorage.getItem('emailForSignIn');
  }

  /**
   * Sign in with Google
   */
  async signInWithGoogle(): Promise<FirebaseUser> {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      // Check if user profile exists, create if not
      const profileExists = await this.userProfileExists(result.user.uid);

      if (!profileExists) {
        // Create minimal profile - user will complete setup next
        await this.createMinimalProfile(result.user);
      } else {
        await this.updateLastLogin(result.user.uid);
      }

      return result.user;
    } catch (error: any) {
      console.error('Google sign in error:', error);
      throw this.handleAuthError(error);
    }
  }

  /**
   * Sign out
   */
  async signOut(): Promise<void> {
    try {
      await signOut(auth);
    } catch (error: any) {
      console.error('Sign out error:', error);
      throw this.handleAuthError(error);
    }
  }

  /**
   * Create minimal user profile (for new sign-ins before profile setup)
   */
  private async createMinimalProfile(user: FirebaseUser): Promise<void> {
    const userProfile: Partial<UserProfile> = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || '',
      photoURL: user.photoURL,
      gradeLevel: '', // Will be set during profile setup
      isGuest: false,
      isParent: false,
      profileCompleted: false, // NEW - marks that setup is needed
      accountType: 'student', // Default, will be updated during setup
      pathProgress: {},
      settings: {
        ttsSpeaker: 'callirrhoe',
        theme: 'dark',
        audioEnabled: true,
      },
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
    };

    await setDoc(doc(firestore, 'users', user.uid), userProfile);
  }

  /**
   * Complete user profile setup (after account type selection)
   */
  async completeProfileSetup(
    uid: string,
    profileData: Partial<UserProfile>
  ): Promise<void> {
    try {
      const updates: Partial<UserProfile> = {
        ...profileData,
        profileCompleted: true,
        onboardingCompletedAt: new Date().toISOString(),
      };

      // If parent account and student info provided, create student account
      if (profileData.isParent && profileData.studentInfo) {
        const studentUid = `student_${uid}_${Date.now()}`;
        const studentProfile: Partial<UserProfile> = {
          uid: studentUid,
          email: null,
          displayName: profileData.studentInfo.displayName,
          photoURL: null,
          gradeLevel: profileData.studentInfo.gradeLevel,
          isGuest: false,
          isParent: false,
          profileCompleted: true,
          accountType: 'student',
          parentUid: uid,
          pathProgress: {},
          settings: {
            ttsSpeaker: 'callirrhoe',
            theme: 'dark',
            audioEnabled: true,
          },
          createdAt: new Date().toISOString(),
          lastLogin: new Date().toISOString(),
        };

        // Save student profile
        await setDoc(doc(firestore, 'users', studentUid), studentProfile);

        // Add student to parent's profile
        updates.students = [{
          uid: studentUid,
          displayName: profileData.studentInfo.displayName,
          gradeLevel: profileData.studentInfo.gradeLevel,
        }];
      }

      await this.updateUserProfile(uid, updates);
    } catch (error) {
      console.error('Error completing profile setup:', error);
      throw error;
    }
  }

  /**
   * Check if user needs profile setup
   */
  async needsProfileSetup(uid: string): Promise<boolean> {
    const profile = await this.getUserProfile(uid);
    return profile ? !profile.profileCompleted : true;
  }

  /**
   * Check if user profile exists in Firestore
   */
  private async userProfileExists(uid: string): Promise<boolean> {
    const docRef = doc(firestore, 'users', uid);
    const docSnap = await getDoc(docRef);
    return docSnap.exists();
  }

  /**
   * Update last login timestamp
   */
  private async updateLastLogin(uid: string): Promise<void> {
    const docRef = doc(firestore, 'users', uid);
    await updateDoc(docRef, {
      lastLogin: new Date().toISOString(),
    });
  }

  /**
   * Get user profile from Firestore
   */
  async getUserProfile(uid: string): Promise<UserProfile | null> {
    try {
      const docRef = doc(firestore, 'users', uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data() as UserProfile;
      }

      return null;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }
  }

  /**
   * Update user profile
   */
  async updateUserProfile(uid: string, updates: Partial<UserProfile>): Promise<void> {
    try {
      const docRef = doc(firestore, 'users', uid);
      await updateDoc(docRef, { ...updates });
    } catch (error) {
      console.error('Error updating user profile:', error);
      throw error;
    }
  }

  /**
   * Add student to parent account
   */
  async addStudentToParent(
    parentUid: string,
    studentInfo: { displayName: string; gradeLevel: string; email?: string }
  ): Promise<string> {
    try {
      // Create student profile
      const studentUid = `student_${parentUid}_${Date.now()}`;
      const studentProfile: UserProfile = {
        uid: studentUid,
        email: studentInfo.email || null,
        displayName: studentInfo.displayName,
        photoURL: null,
        gradeLevel: studentInfo.gradeLevel,
        isGuest: false,
        isParent: false,
        profileCompleted: true,
        accountType: 'student',
        parentUid,
        pathProgress: {},
        settings: {
          ttsSpeaker: 'callirrhoe',
          theme: 'dark',
          audioEnabled: true,
        },
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
      };

      await setDoc(doc(firestore, 'users', studentUid), studentProfile);

      // Add to parent's students array
      const parentRef = doc(firestore, 'users', parentUid);
      const parentSnap = await getDoc(parentRef);

      if (parentSnap.exists()) {
        const parentData = parentSnap.data() as UserProfile;
        const students = parentData.students || [];
        students.push({
          uid: studentUid,
          displayName: studentInfo.displayName,
          gradeLevel: studentInfo.gradeLevel,
          email: studentInfo.email,
        });

        await updateDoc(parentRef, { students });
      }

      return studentUid;
    } catch (error) {
      console.error('Error adding student:', error);
      throw error;
    }
  }

  /**
   * Handle Firebase auth errors with user-friendly messages
   */
  private handleAuthError(error: any): Error {
    let message = 'An error occurred during authentication';

    switch (error.code) {
      case 'auth/email-already-in-use':
        message = 'This email is already registered. Please sign in instead.';
        break;
      case 'auth/invalid-email':
        message = 'Invalid email address format.';
        break;
      case 'auth/operation-not-allowed':
        message = 'This sign-in method is not enabled. Please contact support.';
        break;
      case 'auth/weak-password':
        message = 'Password is too weak. Please use at least 6 characters.';
        break;
      case 'auth/user-disabled':
        message = 'This account has been disabled. Please contact support.';
        break;
      case 'auth/user-not-found':
        message = 'No account found with this email. Please sign up first.';
        break;
      case 'auth/wrong-password':
        message = 'Incorrect password. Please try again.';
        break;
      case 'auth/popup-closed-by-user':
        message = 'Sign-in popup was closed. Please try again.';
        break;
      case 'auth/cancelled-popup-request':
        message = 'Sign-in was cancelled.';
        break;
      case 'auth/network-request-failed':
        message = 'Network error. Please check your connection and try again.';
        break;
      default:
        message = error.message || 'An unexpected error occurred';
    }

    return new Error(message);
  }

  // ===========================
  // INVITE SYSTEM METHODS
  // ===========================

  /**
   * Generate a unique invite token
   */
  private generateInviteToken(): string {
    return `invite_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
  }

  /**
   * Send parent invite (from student to parent)
   * Creates an invite document in Firestore and sends email
   */
  async sendParentInvite(studentUid: string, parentEmail: string): Promise<string> {
    try {
      // Get student profile
      const studentProfile = await this.getUserProfile(studentUid);
      if (!studentProfile) {
        throw new Error('Student profile not found');
      }

      // Generate unique token
      const token = this.generateInviteToken();
      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + 7); // 7 days expiry

      // Create invite document
      await addDoc(collection(firestore, 'invites'), {
        token,
        type: 'student-to-parent',
        fromUid: studentUid,
        fromDisplayName: studentProfile.displayName,
        toEmail: parentEmail,
        studentInfo: {
          uid: studentUid,
          displayName: studentProfile.displayName,
          gradeLevel: studentProfile.gradeLevel,
        },
        createdAt: serverTimestamp(),
        expiresAt: expiresAt.toISOString(),
        accepted: false,
      });

      // Update student profile with pending invite
      await this.updateUserProfile(studentUid, {
        parentInvitePending: true,
        parentEmail: parentEmail,
      });

      // Send invite email
      const inviteUrl = `${window.location.origin}?parentInvite=${token}`;

      await emailService.sendInviteEmail(
        parentEmail,
        inviteUrl,
        {
          displayName: studentProfile.displayName,
          gradeLevel: studentProfile.gradeLevel,
        },
        'Student' // Parent name placeholder since we don't have it yet
      );

      console.log('Parent invite email sent successfully to:', parentEmail);

      return token;
    } catch (error) {
      console.error('Error sending parent invite:', error);
      throw error;
    }
  }

  /**
   * Get pending child invites sent by a parent
   */
  async getPendingChildInvites(parentUid: string): Promise<Array<{
    email: string;
    displayName: string;
    gradeLevel: string;
    sentAt: string;
  }>> {
    try {
      const invitesRef = collection(firestore, 'invites');
      const q = query(
        invitesRef,
        where('type', '==', 'parent-to-child'),
        where('fromUid', '==', parentUid),
        where('accepted', '==', false)
      );

      const snapshot = await getDocs(q);

      const pendingInvites = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          email: data.toEmail,
          displayName: data.childInfo?.displayName || 'Unknown',
          gradeLevel: data.childInfo?.gradeLevel || 'Unknown',
          sentAt: data.createdAt?.toDate?.()?.toISOString() || new Date().toISOString(),
        };
      });

      return pendingInvites;
    } catch (error) {
      console.error('Error fetching pending invites:', error);
      return [];
    }
  }

  /**
   * Send child invite (from parent to child)
   * Creates an invite document for a child with their own email
   */
  async sendChildInvite(
    parentUid: string,
    childEmail: string,
    childInfo: { displayName: string; gradeLevel: string }
  ): Promise<string> {
    try {
      // Get parent profile
      const parentProfile = await this.getUserProfile(parentUid);
      if (!parentProfile) {
        throw new Error('Parent profile not found');
      }

      // Generate unique token
      const token = this.generateInviteToken();
      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + 30); // 30 days expiry

      // Create invite document
      await addDoc(collection(firestore, 'invites'), {
        token,
        type: 'parent-to-child',
        fromUid: parentUid,
        fromDisplayName: parentProfile.displayName,
        toEmail: childEmail,
        childInfo: {
          displayName: childInfo.displayName,
          gradeLevel: childInfo.gradeLevel,
        },
        createdAt: serverTimestamp(),
        expiresAt: expiresAt.toISOString(),
        accepted: false,
      });

      // Send email via Firebase Trigger Email extension
      const inviteUrl = `${window.location.origin}?childInvite=${token}`;

      try {
        await emailService.sendInviteEmail(
          childEmail,
          inviteUrl,
          childInfo,
          parentProfile.displayName
        );
        console.log('[AuthService] Invite email sent successfully to:', childEmail);
      } catch (emailError) {
        console.error('[AuthService] Failed to send invite email:', emailError);
        // Don't fail the invite creation if email fails
        // The invite URL is still generated and can be shared manually
        console.log('[AuthService] Invite URL (share manually):', inviteUrl);
      }

      return token;
    } catch (error) {
      console.error('Error sending child invite:', error);
      throw error;
    }
  }

  /**
   * Get invite information by token
   */
  async getInviteByToken(token: string): Promise<any | null> {
    try {
      const invitesRef = collection(firestore, 'invites');
      const inviteQuery = query(invitesRef, where('token', '==', token));
      const inviteSnapshot = await getDocs(inviteQuery);

      if (inviteSnapshot.empty) {
        return null;
      }

      return inviteSnapshot.docs[0].data();
    } catch (error) {
      console.error('Error getting invite:', error);
      return null;
    }
  }

  /**
   * Accept parent invite
   * Links parent account to student account
   */
  async acceptParentInvite(token: string, parentUid: string): Promise<void> {
    try {
      console.log('[AuthService] Accepting parent invite, token:', token, 'parentUid:', parentUid);

      // Find invite by token field
      const invitesRef = collection(firestore, 'invites');
      const inviteQuery = query(invitesRef, where('token', '==', token));
      const inviteSnapshot = await getDocs(inviteQuery);

      if (inviteSnapshot.empty) {
        console.error('[AuthService] Invite not found for token:', token);
        throw new Error('Invite not found or expired');
      }

      const inviteDoc = inviteSnapshot.docs[0];
      const inviteData = inviteDoc.data();
      console.log('[AuthService] Invite found:', inviteData);

      if (inviteData.type !== 'student-to-parent') {
        throw new Error('Invalid invite type');
      }

      if (inviteData.accepted) {
        throw new Error('Invite already accepted');
      }

      // Check expiry
      if (new Date(inviteData.expiresAt) < new Date()) {
        throw new Error('Invite has expired');
      }

      const studentUid = inviteData.studentInfo.uid;
      console.log('[AuthService] Linking student:', studentUid, 'to parent:', parentUid);

      // Create subcollection documents for parent-child relationship
      // 1. Add parent to student's parents subcollection
      const studentParentsRef = doc(firestore, `users/${studentUid}/parents/${parentUid}`);
      await setDoc(studentParentsRef, {
        parentUid: parentUid,
        linkedAt: serverTimestamp(),
        inviteToken: token,
      });
      console.log('[AuthService] Created student/parents subcollection document');

      // 2. Add child to parent's children subcollection
      const parentChildrenRef = doc(firestore, `users/${parentUid}/children/${studentUid}`);
      await setDoc(parentChildrenRef, {
        childUid: studentUid,
        displayName: inviteData.studentInfo.displayName,
        gradeLevel: inviteData.studentInfo.gradeLevel,
        email: inviteData.studentInfo.email || inviteData.toEmail,
        linkedAt: serverTimestamp(),
        inviteToken: token,
      });
      console.log('[AuthService] Created parent/children subcollection document');

      // Update parent's own profile with linkedChildren (parent has permission)
      try {
        const parentProfile = await this.getUserProfile(parentUid);
        const linkedChildren = parentProfile?.linkedChildren || [];

        linkedChildren.push({
          uid: studentUid,
          email: inviteData.toEmail,
          displayName: inviteData.studentInfo.displayName,
          grade: inviteData.studentInfo.gradeLevel,
        });

        await this.updateUserProfile(parentUid, {
          linkedChildren,
        });
        console.log('[AuthService] Updated parent profile with linkedChildren');
      } catch (error) {
        console.warn('[AuthService] Could not update parent profile fields (non-critical):', error);
      }

      // Note: Student profile fields (parentUid, parentLinked) cannot be updated by parent
      // due to Firestore security rules. The subcollections are sufficient for linking.

      // Mark invite as accepted
      await updateDoc(inviteDoc.ref, {
        accepted: true,
        acceptedAt: serverTimestamp(),
        acceptedByUid: parentUid,
      });

      console.log('[AuthService] ✅ Parent invite accepted successfully');

    } catch (error) {
      console.error('[AuthService] ❌ Error accepting parent invite:', error);
      throw error;
    }
  }

  /**
   * Accept child invite
   * Creates child account and links to parent
   */
  async acceptChildInvite(token: string, childUid: string): Promise<void> {
    try {
      // Find invite by token
      const invitesRef = collection(firestore, 'invites');
      const inviteQuery = await getDoc(doc(invitesRef, token));

      if (!inviteQuery.exists()) {
        throw new Error('Invite not found or expired');
      }

      const inviteData = inviteQuery.data();

      if (inviteData.type !== 'parent-to-child') {
        throw new Error('Invalid invite type');
      }

      if (inviteData.accepted) {
        throw new Error('Invite already accepted');
      }

      // Check expiry
      if (new Date(inviteData.expiresAt) < new Date()) {
        throw new Error('Invite has expired');
      }

      const parentUid = inviteData.fromUid;

      // Update child profile - link to parent
      await this.updateUserProfile(childUid, {
        parentUid: parentUid,
        parentLinked: true,
        displayName: inviteData.childInfo.displayName,
        gradeLevel: inviteData.childInfo.gradeLevel,
        accountType: 'student',
      });

      // Update parent profile - add linked child
      const parentProfile = await this.getUserProfile(parentUid);
      const linkedChildren = parentProfile?.linkedChildren || [];

      linkedChildren.push({
        uid: childUid,
        email: inviteData.toEmail,
        displayName: inviteData.childInfo.displayName,
        grade: inviteData.childInfo.gradeLevel,
      });

      await this.updateUserProfile(parentUid, {
        linkedChildren,
      });

      // Mark invite as accepted
      await updateDoc(doc(invitesRef, token), {
        accepted: true,
        acceptedAt: serverTimestamp(),
        acceptedByUid: childUid,
      });

    } catch (error) {
      console.error('Error accepting child invite:', error);
      throw error;
    }
  }

  /**
   * Get invite details by token (for preview before accepting)
   */
  async getInviteDetails(token: string): Promise<any | null> {
    try {
      const inviteDoc = await getDoc(doc(firestore, 'invites', token));

      if (!inviteDoc.exists()) {
        return null;
      }

      const inviteData = inviteDoc.data();

      // Check if expired
      if (new Date(inviteData.expiresAt) < new Date()) {
        return null;
      }

      // Check if already accepted
      if (inviteData.accepted) {
        return null;
      }

      return inviteData;
    } catch (error) {
      console.error('Error getting invite details:', error);
      return null;
    }
  }

  /**
   * Add child profile (Netflix-style, no email) to parent account
   */
  async addChildProfile(
    parentUid: string,
    childInfo: { displayName: string; gradeLevel: string }
  ): Promise<string> {
    try {
      const parentProfile = await this.getUserProfile(parentUid);
      if (!parentProfile) {
        throw new Error('Parent profile not found');
      }

      // Generate unique profile ID
      const profileId = `profile_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

      const childProfiles = parentProfile.childProfiles || [];

      // Create new child profile
      const newChildProfile = {
        profileId,
        displayName: childInfo.displayName,
        gradeLevel: childInfo.gradeLevel,
        pathProgress: {},
        settings: {
          ttsSpeaker: 'callirrhoe',
          theme: 'light' as const,
          audioEnabled: true,
        },
        createdAt: new Date().toISOString(),
      };

      childProfiles.push(newChildProfile);

      // Update parent profile
      await this.updateUserProfile(parentUid, {
        childProfiles,
      });

      return profileId;
    } catch (error) {
      console.error('Error adding child profile:', error);
      throw error;
    }
  }
}

export const authService = new AuthService();
