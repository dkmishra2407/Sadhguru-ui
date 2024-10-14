import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

// import Contact from '../pages/Contact'
import AboutUs from '../pages/Aboutpage'
import ContactUs from '../pages/Contact'
import Products from '../pages/Products'
import Career from '../pages/Career';
import Gallery from '../pages/gallery';

const Navigation = () => {
  return (
    <div className='content'>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/product' element={<Products />} />
        <Route path='/career' element={<Career />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
    </div >
  )
}

export default Navigation
