import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import WallTiles from '../components/WallTiles';
import ProductContainer from '../components/ProductContainer';
const Products = () => {
  
  return (
   <>
   <ProductContainer/>
    <WallTiles/>
    </>
  )
};

export default Products;
