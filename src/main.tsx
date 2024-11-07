import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import ImageDiv from './ImageDiv'
import DataTenant from './DataTenant'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="w-screen">
      <DataTenant/>
    </div>
  </StrictMode>,
)
