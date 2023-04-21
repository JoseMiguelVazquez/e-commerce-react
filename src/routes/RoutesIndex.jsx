import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ItemDetails from '../pages/ItemDetails'
import Signup from '../pages/Signup'
import Login from '../pages/Login'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/items/:id' element={<ItemDetails />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default RoutesIndex
