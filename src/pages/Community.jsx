import React, {useState} from 'react'
import '../assets/stylesheet/App.css'
import '../assets/stylesheet/Community.css'
import Header from '../components/primary/Header'
import Hero from '../components/community/Hero'
import Nav from '../components/community/Nav'
import Panel from '../components/community/Panel'


export default function Community() {
  const [current, setcurrent] = useState('/all')
  function setpath(path) {
    setcurrent(path)
  }
  return (
    <section className='container'>
     <Header /> 
     <Hero />
     <section className='material-panel-body'>
      <Nav navigate={setpath} active={current} />
      <Panel path={current} />
     </section>
    </section>
  )
}
