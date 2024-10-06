import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

import Contact from '../pages/Contact'
import AboutUs from '../pages/Aboutpage'
import ContactUs from '../pages/Contact'
import Products from '../pages/Products'
import Career from '../pages/Career'
import Teams from '../pages/Teams'
const Navigation = () => {
  return (
    <div className='content'>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/aboutuss' element={<AboutUs />} />
        <Route path='/contacts' element={<ContactUs />} />
        <Route path='/product' element={<Products />} />
        <Route path='/careers' element={<Career />} />
        <Route path='/teams' element={<Teams />} />
      </Routes>
    </div >
  )
}

export default Navigation
