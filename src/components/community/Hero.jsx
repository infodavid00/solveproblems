import React from 'react'
import Highlight from 'react-highlight'
import '../../../node_modules/highlight.js/styles/atom-one-dark-reasonable.css'
import Cardata from './Cardata'

const Syntax = ({code}) => `${code}`

const Card = ({code, language}) => {
  return (
     <div className='material-container-card'>
      <Highlight className={language}>
      <Syntax code={code}  />
      </Highlight>
    </div>
  )
}

export default function Hero() {
  return (
     <section className='material-container-hero'>
        <h2>Solve Today's Code Problem</h2>
        <section className='material-container-subhero'>
          {Cardata.map(current => <Card  key={current.id} code={current.code} language={current.language} />)}
        </section>
    </section>
  )
}

