import React from 'react'
import react from '../../assets/react.svg'
import node from '../../assets/node.svg'
import go from '../../assets/go.svg'
import cplusplus from '../../assets/cplusplus.svg'
import javascript from '../../assets/javascript.svg'
import php from '../../assets/php3.svg'
import python from '../../assets/python.svg'
import typescript from '../../assets/typescript-logo.svg'
import ruby from '../../assets/ruby.svg'
import '../../assets/stylesheet/App.css'

const Languages =  ({name}) => {
  return (
   <div className='cardlist'>
   <img src={name==='react' ? react 
   : name==='nodejs' ?  node 
   : name==='node' ?  node 
   : name==='go' ?  go
   : name==='cplusplus' ?  cplusplus 
   : name==='javascript' ?  javascript 
   : name==='php' ?  php
   : name==='python' ?  python
   : name==='typescript' ?  typescript
   : name==='ruby' ?  ruby
   : ""} />
   </div>
  )
}

export default function Cards() {
  const supportedlanguages = ['react' , 'nodejs', 'python', 'go' , 'cplusplus', 'javascript', 'php' , 'ruby', 'typescript']
  return (
    <section className='cardcontainer'>
    <h2>Supported Languages</h2>
      {supportedlanguages.map(current => <Languages key={current} name={current}/>)}
    </section>
  )
}
