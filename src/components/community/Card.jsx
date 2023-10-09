import React from 'react'
import '../../assets/stylesheet/Community.css'
import Header from './Header'
import Footer from './Footer'

export default function Card({data}) {
  return (
  <section className='material-community-p-body'>
    <Header/>
    <h2 className='material-community-p-body-text'>{data}</h2>
    <Footer />
    <section style={{marginTop:10}}>
     <button className='material-community-p-footer-main'>Solve problem</button>
    </section>
   </section>
  )
}
