import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ImageDiv from './ImageDiv'
import InfoCard from './InfoCard'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="w-full">
      <ImageDiv/>
      <InfoCard/>
    </div>
  </StrictMode>,
)
