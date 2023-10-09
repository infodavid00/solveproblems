import React from 'react'
import '../../assets/stylesheet/Community.css'

export default function Header() {
  return (
   <section className='material-community-p-header'>
   <div className='material-community-p-header-subcontainer'>
    <button className='material-community-p-header-username'>user292ufjskioa29iw</button>
    <button className='material-community-p-header-ptag' style={{background:'rgba(0,250,0,0.1'}}>javascript</button>
   </div>
    <button className='material-community-p-header-time'>3mins ago</button>
  </section>
  )
}
