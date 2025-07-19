import { useState } from 'react'
import React from 'react'
import Hero from './pages/landing/Hero.tsx'
import Navbar from './pages/Navbar.tsx'
import Features from './pages/landing/Features.tsx'

import './App.css'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Features />

      
    </>
  )
}

export default App
