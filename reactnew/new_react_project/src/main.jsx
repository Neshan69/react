import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Home pageTitle={"Home page title"} age={45} address= "kathmandu"/>
  </StrictMode>
)