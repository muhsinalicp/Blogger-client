import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
        <App >
          <ReactQueryDevtools initialIsOpen={false} />
          {/* <ToastContainer /> */}
        </App>
    </BrowserRouter>
  </StrictMode>,
)
