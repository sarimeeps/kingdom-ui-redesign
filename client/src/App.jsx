import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar' 
import Homepage from './pages/Homepage'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <section id="relative center">
        <div id="large-gradient" className="absolute -z-10 h-175 lg:h-205 md:h-190 w-full bg-linear-to-r from-[#E193CD]/50 to-[#E1A1CC]/50 to-[#E0A2C0]/50 to-[#E3AFCA]/50 to-[#F1BFCC]/50"></div>
        <Navbar />
        <Homepage />
        
        <Footer />
      </section>

    </BrowserRouter>
  )
}

export default App
