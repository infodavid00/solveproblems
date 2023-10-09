import React from 'react'

const List  = ({data}) => {
  return <div className='model-screen-lists'>{data.name}</div>  
 }

const data = [
 {id:1,name:'get reserved name', path:'/'},
 {id:2,name:'go to feed', path:'/'},
 {id:3,name:'available languages', path:'/'}, 
 {id:4,name:'create new problem', path:'/'}, 
 {id:5,name:'create new poll', path:'/'}
 ]

export default function Modal({isvisible, tooglevisibility}) {
  return (
    <section className='modal-tint-screen' style={{display: isvisible===true ? 'flex' : 'none'}} onClick={tooglevisibility}>
    <div className='modal-screen' id='modal-screen'>
     <h3>Other Services</h3>
     <section style={{marginTop:'3vh'}}>
       {data.map((current) => <List key={current.id} data={current} />)}
     </section>
    </div>
    </section>
  )
}
