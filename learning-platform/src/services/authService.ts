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
   * @param email - User's email address
   * @param accountType - Optional account type (student/parent) for cross-device persistence
   */
  async sendVerificationEmail(email: string, accountType?: 'student' | 'parent'): Promise<void> {
    try {
      // Build URL with account type and email as query parameters
      // This ensures cross-device compatibility (works if user clicks link on different device)
      const params = new URLSearchParams({
        emailSignIn: 'true',
        email: email, // Email in URL for cross-device verification
      });

      if (accountType) {
        params.append('accountType', accountType);
      }

      const actionCodeSettings = {
        // URL to redirect to after email link click
        url: `${window.location.origin}/?${params.toString()}`,
        handleCodeInApp: true,
      };

      await sendSignInLinkToEmail(auth, email, actionCodeSettings);

      // Save to localStorage as backup (works for same-device flow)
      window.localStorage.setItem('emailForSignIn', email);
      if (accountType) {
        window.localStorage.setItem('accountTypeForSignIn', accountType);
      }
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

      // Extract account type from URL parameters (for cross-device flow)
      const url = new URL(link);
      const accountTypeFromUrl = url.searchParams.get('accountType') as 'student' | 'parent' | null;

      console.log('[AuthService] Email sign-in with accountType from URL:', accountTypeFromUrl);

      // Sign in with email link
      const userCredential = await signInWithEmailLink(auth, email, link);

      // Clear localStorage
      window.localStorage.removeItem('emailForSignIn');
      window.localStorage.removeItem('accountTypeForSignIn');

      // Check if this is a new user (profile doesn't exist)
      const profileExists = await this.userProfileExists(userCredential.user.uid);

      if (!profileExists) {
        // Create minimal profile with account type from URL - user will complete setup next
        await this.createMinimalProfile(userCredential.user, accountTypeFromUrl);
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
   * @param user - Firebase user object
   * @param accountType - Optional account type from email verification URL (cross-device flow)
   */
  private async createMinimalProfile(
    user: FirebaseUser,
    accountType?: 'student' | 'parent' | null
  ): Promise<void> {
    const userProfile: Partial<UserProfile> = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || '',
      photoURL: user.photoURL,
      gradeLevel: '', // Will be set during profile setup
      isGuest: false,
      isParent: accountType === 'parent', // Use URL param if available
      profileCompleted: false, // Marks that setup is needed
      accountType: accountType || 'student', // Use URL param or default to student
      pathProgress: {},
      parents: [], // Initialize empty parents array (populated when parent links via invite)
      settings: {
        ttsSpeaker: 'callirrhoe',
        theme: 'dark',
        audioEnabled: true,
      },
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
    };

    console.log('[AuthService] Creating minimal profile with accountType:', accountType);

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
   * Get linked children from subcollection
   * @param parentUid - Parent's UID
   * @returns Array of linked children with their details
   */
  async getLinkedChildren(parentUid: string): Promise<Array<{uid: string; email: string; displayName: string; grade: string; lastActivityAt?: string}>> {
    try {
      const childrenRef = collection(firestore, `users/${parentUid}/children`);
      const snapshot = await getDocs(childrenRef);

      const children: Array<{uid: string; email: string; displayName: string; grade: string; lastActivityAt?: string}> = [];
      snapshot.forEach((doc) => {
        const data = doc.data();

        // Filter out Netflix-style profiles (type: 'child-profile')
        // They're already shown via childProfiles[] array to avoid duplicates
        if (data.type === 'child-profile') {
          console.log('[AuthService] Skipping Netflix profile in linked children:', data.childUid);
          return;
        }

        children.push({
          uid: data.childUid,
          email: data.email,
          displayName: data.displayName,
          grade: data.gradeLevel,
          lastActivityAt: data.linkedAt?.toDate?.()?.toISOString(),
        });
      });

      console.log(`[AuthService] Fetched ${children.length} email-based linked children from subcollection (Netflix profiles excluded)`);
      return children;
    } catch (error) {
      console.error('Error fetching linked children:', error);
      return [];
    }
  }

  /**
   * Update user profile
   */
  async updateUserProfile(uid: string, updates: Partial<UserProfile>): Promise<void> {
    try {
      const docRef = doc(firestore, 'users', uid);
      // Use setDoc with merge to create document if it doesn't exist
      await setDoc(docRef, { ...updates }, { merge: true });
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

      await emailService.sendParentInviteEmail(
        parentEmail,
        inviteUrl,
        {
          displayName: studentProfile.displayName,
          gradeLevel: studentProfile.gradeLevel,
        }
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
        await emailService.sendChildInviteEmail(
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
      // Find invite by token field (same pattern as acceptParentInvite)
      const invitesRef = collection(firestore, 'invites');
      const inviteQuery = query(invitesRef, where('token', '==', token));
      const inviteSnapshot = await getDocs(inviteQuery);

      if (inviteSnapshot.empty) {
        throw new Error('Invite not found or expired');
      }

      const inviteDoc = inviteSnapshot.docs[0];
      const inviteData = inviteDoc.data();

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

      console.log('[AuthService] Linking child:', childUid, 'to parent:', parentUid);

      // Create subcollection documents for parent-child relationship (same pattern as acceptParentInvite)
      // 1. Add parent to child's parents subcollection
      const childParentsRef = doc(firestore, `users/${childUid}/parents/${parentUid}`);
      await setDoc(childParentsRef, {
        parentUid: parentUid,
        linkedAt: serverTimestamp(),
        inviteToken: token,
      });
      console.log('[AuthService] Created child/parents subcollection document');

      // 2. Add child to parent's children subcollection
      const parentChildrenRef = doc(firestore, `users/${parentUid}/children/${childUid}`);
      await setDoc(parentChildrenRef, {
        childUid: childUid,
        displayName: inviteData.childInfo.displayName,
        gradeLevel: inviteData.childInfo.gradeLevel,
        email: inviteData.toEmail,
        linkedAt: serverTimestamp(),
        inviteToken: token,
      });
      console.log('[AuthService] Created parent/children subcollection document');

      // Update child's own profile (child has permission to update their own profile)
      try {
        // Get current parents array
        const childProfile = await this.getUserProfile(childUid);
        const currentParents = childProfile?.parents || [];

        // Add parent to parents array if not already present
        if (!currentParents.includes(parentUid)) {
          currentParents.push(parentUid);
        }

        await this.updateUserProfile(childUid, {
          parentUid: parentUid,
          parentLinked: true,
          parents: currentParents, // Update parents array for security rules
          displayName: inviteData.childInfo.displayName,
          gradeLevel: inviteData.childInfo.gradeLevel,
          accountType: 'student',
          profileCompleted: true,
        });
        console.log('[AuthService] Updated child profile with parent link and parents array');
      } catch (error) {
        console.warn('[AuthService] Could not update child profile fields (non-critical):', error);
      }

      // Note: Parent profile fields (linkedChildren) cannot be updated by child
      // due to Firestore security rules. The subcollections are sufficient for linking.

      // Mark invite as accepted
      await updateDoc(inviteDoc.ref, {
        accepted: true,
        acceptedAt: serverTimestamp(),
        acceptedByUid: childUid,
      });

      console.log('[AuthService] ✅ Child invite accepted successfully');

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

      // Generate unique profile ID (serves as pseudo-UID)
      const profileId = `profile_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

      const childProfiles = parentProfile.childProfiles || [];
      const timestamp = new Date().toISOString();

      // Create new child profile entry for parent's array
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
        createdAt: timestamp,
      };

      childProfiles.push(newChildProfile);

      // ==============================================================
      // SHADOW DOCUMENT CREATION (Option B Implementation)
      // ==============================================================
      // Create a full user document for the child profile to enable:
      // - Progress tracking (learn/practice subcollections)
      // - Stats and analytics (progressSummaries)
      // - Gamification (XP, levels, streaks)
      // - Settings management
      //
      // Authentication: Parent's Firebase Auth token is used
      // Data Storage: Child's pseudo-UID (profileId)
      // Security: Parent has access via 'parents' array + subcollections
      // ==============================================================

      // 1. Create shadow user document
      const shadowUserDoc = {
        uid: profileId,
        displayName: childInfo.displayName,
        gradeLevel: childInfo.gradeLevel,
        email: null, // No email for Netflix-style profiles
        photoURL: null,
        accountType: 'child-profile' as const, // Distinguish from real students
        isParent: false,
        profileCompleted: true,
        parentUid: parentUid, // Link to parent
        parents: [parentUid], // For security rules - CRITICAL!
        parentLinked: true,
        createdAt: timestamp,
        lastLogin: timestamp,
        pathProgress: {},
        settings: {
          ttsSpeaker: 'callirrhoe',
          theme: 'light',
          audioEnabled: true,
        },
        // Initialize gamification stats
        gamification: {
          totalXP: 0,
          currentLevel: 1,
          dailyStreak: {
            currentStreak: 0,
            longestStreak: 0,
            lastActivityDate: null,
          },
        },
      };

      await setDoc(doc(firestore, 'users', profileId), shadowUserDoc);
      console.log('✅ Created shadow user document:', profileId);

      // 2. Create parent-child relationship subcollections (for security rules)
      await setDoc(doc(firestore, `users/${parentUid}/children`, profileId), {
        childUid: profileId,
        displayName: childInfo.displayName,
        gradeLevel: childInfo.gradeLevel,
        type: 'child-profile', // vs 'linked-child'
        email: null,
        linkedAt: serverTimestamp(),
      });
      console.log('✅ Created parent→child subcollection entry');

      await setDoc(doc(firestore, `users/${profileId}/parents`, parentUid), {
        parentUid: parentUid,
        linkedAt: serverTimestamp(),
      });
      console.log('✅ Created child→parent subcollection entry');

      // 3. Create empty progress summary (required for parent dashboard analytics)
      await setDoc(doc(firestore, 'progressSummaries', profileId), {
        learnSubtopics: {},
        practiceTopics: {},
        recentActivity: [],
        lastUpdated: serverTimestamp(),
      });
      console.log('✅ Created progress summary document');

      // 4. Update parent profile with child entry (for UI compatibility)
      await this.updateUserProfile(parentUid, {
        childProfiles,
      });
      console.log('✅ Updated parent profile with child entry');

      console.log('🎉 Netflix-style child profile created successfully:', profileId);
      return profileId;
    } catch (error) {
      console.error('Error adding child profile:', error);
      throw error;
    }
  }
}

export const authService = new AuthService();
