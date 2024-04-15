import { useState } from 'react'
import './app.scss'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Parallax from './Components/Parallex/Parallax'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'

function App() {

  return (
    <div>
      <section id='Home'>
        <Navbar />
        <Hero />
      </section>
      <section id='Services'>
        <Parallax type="service" />
      </section>
      <section>
        <Services />
      </section>
      <section id='Portfolio'>
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      {/* <About /> */}
      {/* <section id='Contact'>
        <Contact />
      </section> */}
      {/* <Test /> */}
    </div>
  )
}

export default App
