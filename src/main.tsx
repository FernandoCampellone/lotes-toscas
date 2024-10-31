import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ImageDiv from './ImageDiv'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ImageDiv/>
  </StrictMode>,
)
