import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar' 
import Footer from './components/Footer'

function App() {

  return (
    <>
      <section id="center">
        <Navbar />
        <h1>ORANGE HAIR YOONGI</h1>
        <h2>ORANGE HAIR YOONGI</h2>
        <h3>ORANGE HAIR YOONGI</h3>
        <button>ORANGE HAIR YOONGI</button>
        <div className='bg-[#3c3c3c]'>
          <ul>ORANGE
          <li>HAIR</li>
          <li>YOONGI</li>
        </ul>
        </div>
        <Footer />
      </section>

    </>
  )
}

export default App
