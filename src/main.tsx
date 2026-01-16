import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'

const root = createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

// Hide loader after app is mounted
setTimeout(() => {
  const loader = document.getElementById('app-loader')
  if (loader) {
    loader.classList.add('hidden')
    setTimeout(() => loader.remove(), 300)
  }
}, 100)
