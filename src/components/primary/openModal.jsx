import React from 'react'

export default function OpenModal({isvisible, data}) {
  return (
    <section className='modal-tint-screen' style={{display: isvisible===true ? 'flex' : 'none'}}>
    <div className='modal-screen' id='modal-screen'>
     <h3>{data.title}</h3>
      <section style={{marginTop:'3vh'}}>
       {data.body.map(current => <p key={current} className='modal-paragraph'>{current}</p>)}
       {data.buttons.map(current =>  <button key={current.id} onClick={current.click} className={current.color === 'positive' ? 'modal-action-button modal-action-button-positive' : 'modal-action-button'}>
       {current.title}</button>)}
     </section> 
    </div>
    </section>
  )
}
