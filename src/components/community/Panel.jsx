import React from 'react'
import '../../assets/stylesheet/Community.css'
import Card from './Card'

const data = [
  'Find The Reason Why The Code Fails To Return A value',
  'What will be the output of the following code',
  'Complete my top10 node questions and probve your the real Boss dev'
]

export default function Panel({path}) {
  return (
    <section className='material-panel'>
     <section>
       {data.map(current => <Card key={current} data={current} />)}
     </section>
    </section>
  )
}
