import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '@/pages/Home'
import ItemDetails from '@/pages/ItemDetails'
import Signup from '@/pages/Signup'
import Login from '@/pages/Login'
import About from '@/pages/About'
import SearchPage from '@/pages/SearchPage/'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/items/:id' element={<ItemDetails />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/about' element={<About />} />
      <Route path='/search' element={<SearchPage />} />
    </Routes>
  )
}

export default RoutesIndex
