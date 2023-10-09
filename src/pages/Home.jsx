import React from 'react'
import '../assets/stylesheet/App.css'
import Header from '../components/primary/Header'
import Hero from '../components/home/Hero'
import Cards from '../components/home/cards'
import svg from '../assets/Problem solving-cuate.svg'

export default function Home() {
  return (
    <section className='container'>
      <Header />
      <section id='container-grid'>
       <img src={svg} id='container-img1' />
        <Hero />
       <img src={svg} id='container-img2' />
      </section>
      <Cards />
    </section>
  )
}

