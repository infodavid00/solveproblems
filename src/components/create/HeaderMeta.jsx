import React , {useState} from 'react'
import '../../assets/stylesheet/Create.css'

const Navigationlinks = ({lists, newactive, active })=> {
  return (
   <button onClick={newactive} className={active===lists.title? 'material-create-meta-tags material-create-meta-tags-active' : 'material-create-meta-tags'}>
   {lists.title}</button>
  )
}

const lists = [
  {id :1 ,title:'Nodejs'},
  {id :2 ,title:'Python'},
  {id :3 ,title:'Golang'},
  {id :4 ,title:'Javascript'},
  {id :5 ,title:'C++'},
  {id :6 ,title:'Ruby'},
  {id :7 ,title:'Typescript'},
  {id :8 ,title:'Php'},
  {id :9 ,title:'React'}
]

export default function HeaderMeta({addnewPage, pages, noofpagestotal}) {
  const strHero = 'Enter Your Post Title'
  const arrayHero = strHero.split('')
  const [count, setcount] = useState('')
  const [index, setindex] = useState(0)

  const int = setTimeout(()=> {
  setindex(index+1)
  setcount(count + '' + arrayHero[index])
  }, 34)

  if (index === arrayHero.length) clearInterval(int)
  int;

  const [active,setactive] = useState(lists[0].title)
  return (
    <section className='material-create-meta-container'>
    <textarea className='material-create-meta-title' placeholder={count}></textarea>
    <section className='material-create-meta-optbody'>
        <section className='material-create-meta-tags-container'>
          {lists.map(current => <Navigationlinks key={current.id} lists={current} newactive={()=> setactive(current.title)} active={active} />)}
        </section>
        <section style={{display:'flex', gap:'7px', flexWrap:'wrap'}}>
          <button className='material-create-meta-actionbtn'>Use reserved name</button> 
          <button className='material-create-meta-actionbtn' onClick={addnewPage}>Add new problem {pages}/{noofpagestotal}</button> 
        </section>
     </section>
    </section>
  )
}
