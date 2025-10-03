import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { sessionStorage } from './services/sessionStorage.ts'

// Add a global function for clearing session storage for testing
if (import.meta.env.DEV) {
  (window as any).clearAppSession = () => {
    console.log('Clearing all application session data...');
    sessionStorage.clearAllSessions();
    console.log('Session data cleared. Please reload the page.');
  };
  console.log('Testing utility loaded: call window.clearAppSession() from the console to clear all stored session data.');
}

createRoot(document.getElementById('root')!).render(
  <App />
)
