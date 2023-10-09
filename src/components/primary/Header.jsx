import React, {useState} from 'react'
import '../../assets/stylesheet/App.css'
import svg from '../../assets/logo.svg'
import Modal from '../../components/primary/modal'

export default function Header() {
  const [isvisible, setisvisible] = useState(false)
  return (
    <>
    <section className='nav-header'>
     <span><img src={svg} width={30}/><span>openorder</span></span>
     <ul onClick={() => setisvisible(true)}>
       <li>More action</li>
     </ul>
    </section>
     <Modal isvisible={isvisible} tooglevisibility={()=> setisvisible(false) } />
    </>
  )
}
