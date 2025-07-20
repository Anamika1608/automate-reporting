import Navbar from './components/Navbar/Navbar.tsx'
import { Outlet } from "react-router-dom"
import Footer from './components/Footer/Footer.tsx'

import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  )
}

export default App
