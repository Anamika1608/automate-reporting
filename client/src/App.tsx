import React from 'react'
import Navbar from './components/Navbar/Navbar.tsx'
import { Outlet } from "react-router-dom"
import Footer from './components/Footer/Footer.tsx'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App