import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import WallTiles from '../components/WallTiles';
import ProductContainer from '../components/ProductContainer';
const Products = () => {
  
  return (
   <>
   <ProductContainer/>
   <h1 className="text-3xl font-bold mb-4 text-center text-blue-600"> Gallery Section</h1>
    <WallTiles/>
    </>
  )
};

export default Products;
