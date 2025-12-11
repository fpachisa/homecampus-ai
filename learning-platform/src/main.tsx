import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './contexts/AuthContext'
import { ActiveProfileProvider } from './contexts/ActiveProfileContext'
import { ThemeProvider } from './contexts/ThemeContext'

// Hide loading screen when React is ready
const loadingScreen = document.getElementById('loading-screen')
if (loadingScreen) {
  loadingScreen.style.display = 'none'
}

createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="dark">
    <AuthProvider>
      <ActiveProfileProvider>
        <App />
      </ActiveProfileProvider>
    </AuthProvider>
  </ThemeProvider>
)
