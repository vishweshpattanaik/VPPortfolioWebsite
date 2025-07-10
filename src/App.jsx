import React from 'react';

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="bg-[#0d0d0d] text-white font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Certifications />
      <Footer />
    </main>
  )
}
