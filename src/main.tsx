import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import ImageDiv from './ImageDiv'
import DataPropietarios from './DataPropietarios'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="w-screen">
      <DataPropietarios/>
    </div>
  </StrictMode>,
)
