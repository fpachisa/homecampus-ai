import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Hide loading screen when React is ready
const loadingScreen = document.getElementById('loading-screen')
if (loadingScreen) {
  loadingScreen.style.display = 'none'
}

createRoot(document.getElementById('root')!).render(
  <App />
)
