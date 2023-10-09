import React, {useState} from 'react'
import '../assets/stylesheet/Community2.css'
import '../assets/stylesheet/App.css'
import { code, language , options } from '../components/problems/Body' //should remove in production mode
import Header from '../components/primary/Header'
import Title from '../components/community2/Title'
import Meta from '../components/community2/Meta'
import Syntax from '../components/primary/Syntax'
import Syntaxopt from '../components/primary/Syntaxopt'
import OpenModal from '../components/primary/openModal'

export default function Community2() {
  const [isvisible, setisvisible] = useState(true)
  const udata = [
    {
      id:0,
      title: 'Code Challanges!',
      body: [
    'onclick of an option, the problem  will automatically be submitted, please note that this action cannot be reversed, so be careful when making this choice.',
     'its posibble for the code snippets to overflow, if you come across this situation, click on the box and scroll to see more.'
  ],
      buttons: [
        {
        id:0, title:'Got it!', click:function() { setisvisible(false)}, color:'positive'
      }  
      ]
    }
  ]
  const [modeldata, setmodeldata] = useState(udata[0])

  return (
    <>
    <section className="container">
     <Header />
    </section>
    <section className='container-problemsolving-c2'>
     <section className='seperator'>
        <Title />
        <Meta />
     </section>
     <section className='container-material-container-largescreens'>
         <Syntax code={code} language={language} />
         <section className='container-material-container-subhero'>
         {options.map(current => 
         <Syntaxopt key={current.id} code={current.code} language={language} />
       )} 
     </section>
     </section>
    </section> 
    <OpenModal isvisible={isvisible} data={modeldata} />
    </>
  )
}
