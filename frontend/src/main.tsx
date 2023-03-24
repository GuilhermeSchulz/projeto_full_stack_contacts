import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import App from './App'
import { GlobalStyles } from './styles'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles/>
    <App />
    <ToastContainer />
  </React.StrictMode>,
)
