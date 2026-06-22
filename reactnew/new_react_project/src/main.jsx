import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import PropsExample from './day4/PropsExample.jsx'

let myObj ={
  name: "Neshan",
  age: 63
}
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//     <Home pageTitle={"Home page title"} age={45} address= "kathmandu"/>
//   </StrictMode>
// )
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PropsExample {...myObj}  />
  </StrictMode>
)
