import React, { useState } from 'react'
import '../assets/stylesheet/App.css'
import '../assets/stylesheet/Create.css'
import Header from '../components/primary/Header'
import HeaderMeta from '../components/create/HeaderMeta'
import Page from '../components/create/Page'

export default function Create() {
  const noofpagestotal = 4
  const [newpage, setnewpage] = useState(1)

  function addnewPage() {
    if (newpage < noofpagestotal) {
      setnewpage(newpage + 1)
    }
  }
  const pages = [];

  for (let i = 0; i < newpage; i++) {
    pages.push(<Page key={i} />);
  }

  return (
    <section className='container'>
      <Header />
      <HeaderMeta addnewPage={addnewPage} pages={newpage} noofpagestotal={noofpagestotal} />
      <section className='material-create-body-main'>
        {pages.reverse()}
      </section>
    </section>
  )
}
