import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CatProvider } from './contexts/index.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CatProvider>
      <App />
    </CatProvider>
  </StrictMode>
);
