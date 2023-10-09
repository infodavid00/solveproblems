import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Community from './pages/Community'
import Community2 from './pages/Community2'
import Create from './pages/Create'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='*' element={<Home/>} />
        <Route exact path='/community' element={<Community />} />
        <Route exact path='/community/:id' element={<Community2 />} />
        <Route exact path='/create' element={<Create />} />
      </Routes>
    </>
  )
}

export default App
