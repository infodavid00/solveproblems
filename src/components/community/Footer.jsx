import React from 'react'
import '../../assets/stylesheet/Community.css'
import {Check,X} from 'react-feather'

export default function Footer() {
  return (
   <section className='material-community-p-footer'>
    <div>
      <Check width={22} height={22} strokeWidth={1.3}/>
      <span>12</span>
    </div>
    <div>
      <X width={22} height={22} strokeWidth={1.3}/>
      <span>64</span>
    </div>
    <div>
      <button style={{background:'rgba(0,250,0,0.1'}}>intermediate</button>
    </div>
  </section>
  )
}
