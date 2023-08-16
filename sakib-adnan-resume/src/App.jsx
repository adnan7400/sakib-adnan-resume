import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from "./components/Navbar"
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Experience from './pages/experience/Experience'
import Skills from './pages/skills/Skills'

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='experience' element={<Experience />} />
            <Route path='contact' element={<Contact />} />
            <Route path='skills' element={<Skills />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
