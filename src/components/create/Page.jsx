import React from 'react'
import '../../assets/stylesheet/Create.css'

export default function Page() {
  return (
    <section className='material-create-body-body'>
     <h3>New code problem</h3>
     <section style={{marginTop:'1.7vh'}}>
       <input type='text' placeholder='enter your problem title' className='material-create-body-title' />
     </section>

     <section>
       <textarea placeholder='code syntax here' className='material-create-body-code' rows={'10'}></textarea>
     </section>

     <section>
        <textarea placeholder='option one' className='material-create-body-code material-create-body-subcode' rows={'3'}></textarea>
        <textarea placeholder='option two' className='material-create-body-code material-create-body-subcode' rows={'3'}></textarea>
        <textarea placeholder='option three' className='material-create-body-code material-create-body-subcode' rows={'3'}></textarea>
        <textarea placeholder='option four' className='material-create-body-code material-create-body-subcode' rows={'3'}></textarea>
     </section>
     <section className='material-create-body-options-cont'>
      <button className='material-create-body-options-but-main' disabled={true}>correct answer</button>
      <button className='material-create-body-options-but'>A</button>
      <button className='material-create-body-options-but'>B</button>
      <button className='material-create-body-options-but'>C</button>
      <button className='material-create-body-options-but'>D</button>
     </section>
    </section>
  )
}
