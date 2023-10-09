import React from 'react'
import '../../assets/stylesheet/Community.css'

const Navigationlinks = ({lists, navigate, active })=> {
  return (
   <button onClick={navigate} className={active===lists.path? 'material-navigation-list material-navigation-list-active' : 'material-navigation-list'}>
   {lists.title}</button>
  )
}

const lists = [
  {id :0 ,title:'All', path: '/all'},
  {id :1 ,title:'Nodejs', path: '/node'},
  {id :2 ,title:'Python', path: '/python'},
  {id :3 ,title:'Golang', path: '/go'},
  {id :4 ,title:'Javascript', path: '/javascript'},
  {id :5 ,title:'C++', path: '/c++'},
  {id :6 ,title:'Ruby', path: '/ruby'},
  {id :7 ,title:'Typescript', path: '/typescript'},
  {id :8 ,title:'Php', path: '/php'},
  {id :9 ,title:'React', path: '/react'}
]

export default function Nav({navigate, active}) {
  return (
    <section className='material-navigation'>
    {lists.map(current => <Navigationlinks key={current.id} lists={current} navigate={()=>navigate(current.path)} active={active} />)}
    </section>
  )
}
