import React, {useState} from 'react'
import '../../assets/stylesheet/App.css'

const IndicatorButton = () => <button id='indicatorbutton'></button>

export default function Hero() {
  const strHero = 'Create and Solve Code Problems wtih Open Order\'s QA service'
  const arrayHero = strHero.split('')
  const [count, setcount] = useState('')
  const [index, setindex] = useState(0)

  const int = setTimeout(()=> {
  setindex(index+1)
  setcount(count + '' + arrayHero[index])
  }, 34)

  if (index === arrayHero.length) clearInterval(int)
  int;

  const hero_text = 'Join our coding community, learn and collaborate with passionate enthusiasts to unlock your coding potential and achieve greatness together!'
 
  return (
    <section>
      <h1 className='hero-title'>{count}{<IndicatorButton />}</h1> 
      <p className='hero-text'>{hero_text}</p> 
      <div style={{display:'flex' , flexDirection:'row' , alignItems:'center', marginTop: '1vh'}}>
        <button className='hero-button'>Start Engaging</button>
        <button className='hero-link'>Explore community</button>
      </div>
    </section>
  )
}
