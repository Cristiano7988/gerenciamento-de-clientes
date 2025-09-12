import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/inter'
import '@fontsource/inter/700.css'
import './variables.css'
import './reset.css'
import './index.css'

import { App } from './apps/clients/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
