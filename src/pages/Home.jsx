import React from 'react'
import Responsive from '../components/Slider'
import AboutUs from '../components/Aboutus'
import OurProducts from '../components/OurProducts'
import ListOfMachinery from '../components/ListOfMachinery'
import OurPartners from '../components/OurParterns'
import OurClients from './OurClients'



const Home = () => {
  return (
    <div style={{
      width: '100%',
      margin: 'auto',
      padding: 0,

    }}>

      <Responsive />
      <AboutUs />
      <OurProducts />
     <OurPartners />
      <OurClients/>
    </div>
  )
}

export default Home
