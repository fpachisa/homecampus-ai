import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, enableIndexedDbPersistence, connectFirestoreEmulator } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';

// Load .env in Node environments (scripts)
if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production') {
  try {
    // This will only work if dotenv is available
    const dotenv = await import('dotenv');
    dotenv.config();
  } catch (e) {
    // Dotenv not available or already loaded, that's ok
  }
}

// Firebase config - using import.meta.env for Vite, process.env for Node scripts
const firebaseConfig = {
  apiKey: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_FIREBASE_API_KEY) || process.env.VITE_FIREBASE_API_KEY || "placeholder-api-key",
  authDomain: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_FIREBASE_AUTH_DOMAIN) || process.env.VITE_FIREBASE_AUTH_DOMAIN || "placeholder.firebaseapp.com",
  projectId: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_FIREBASE_PROJECT_ID) || process.env.VITE_FIREBASE_PROJECT_ID || "placeholder-project",
  storageBucket: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_FIREBASE_STORAGE_BUCKET) || process.env.VITE_FIREBASE_STORAGE_BUCKET || "placeholder.appspot.com",
  messagingSenderId: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_FIREBASE_MESSAGING_SENDER_ID) || process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "000000000000",
  appId: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_FIREBASE_APP_ID) || process.env.VITE_FIREBASE_APP_ID || "placeholder-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app, 'asia-southeast1');

// Connect to emulators in development
// Set VITE_USE_EMULATORS=true in .env to enable
const useEmulators = typeof import.meta !== 'undefined' && import.meta.env?.VITE_USE_EMULATORS === 'true';

if (typeof window !== 'undefined' && useEmulators) {
  connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
  connectFirestoreEmulator(firestore, 'localhost', 8080);
  connectFunctionsEmulator(functions, 'localhost', 5001);
  console.log('🔧 Connected to Firebase Emulators');
}

// Enable offline persistence (MVP requirement)
// Only enable in browser environment, and NOT when using emulators
if (typeof window !== 'undefined' && !useEmulators) {
  enableIndexedDbPersistence(firestore).catch((err) => {
    if (err.code === 'failed-precondition') {
      console.log('Offline mode disabled: Multiple tabs open');
    } else if (err.code === 'unimplemented') {
      console.log('Offline mode not available in this browser');
    }
  });
}

export default app;
