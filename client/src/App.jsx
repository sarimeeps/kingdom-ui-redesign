import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar' 
import Homepage from './pages/Homepage'

function App() {

  return (
    <>
      <section id="relative center">
        <div id="large-gradient" className="absolute -z-10 h-167 lg:h-162 md:h-180 w-full bg-linear-to-r from-[#E193CD]/50 to-[#E1A1CC]/50 to-[#E0A2C0]/50 to-[#E3AFCA]/50 to-[#F1BFCC]/50"></div>
        <Navbar />
        <Homepage />
      </section>

    </>
  )
}

export default App
