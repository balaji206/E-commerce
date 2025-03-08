import React from 'react'

import './App.css'
import { Routes,Route } from 'react-router-dom'
import { Loginpage } from './routes/routes'
import Home from './page/Home'
import Signup from './component/signup/signup'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Loginpage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </>
  )
}

export default App
