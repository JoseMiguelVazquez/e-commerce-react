import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import ItemDetails from '../pages/ItemDetails/ItemDetails'
import Signup from '../pages/Signup/Signup'
import Login from '../pages/Login/Login'
import About from '../pages/About/About'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/items/:id' element={<ItemDetails />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/about' element={<About />} />
    </Routes>
  )
}

export default RoutesIndex
