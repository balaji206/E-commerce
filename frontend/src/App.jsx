import { useState } from 'react'

import './App.css'
import { Routes,Route } from 'react-router-dom'
import { Loginpage } from './routes/routes'

function App() {

  return (
    <>
    <Routes>
      <Route path='/login' element={<Loginpage/>}/>
      </Routes>
    </>
  )
}

export default App
