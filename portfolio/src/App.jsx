import { useState } from 'react'
import './app.scss'
import Navbar from './Components/Navbar/Navbar'
// import Test from './Test'

function App() {

  return (
    <div>
      <section id='Home'>
        <Navbar />
      </section>
      <section id='Services'>Parallex</section>
      <section>Services</section>
      <section id='Portfolio'>Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id='About'>About</section>
      <section id='Contact'>Contact</section>
      {/* <Test /> */}
    </div>
  )
}

export default App
