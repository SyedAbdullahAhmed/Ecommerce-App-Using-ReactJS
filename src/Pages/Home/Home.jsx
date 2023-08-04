import React from 'react';
import Carousal from '../../Components/Carousel/Carousal';
import AllProducts from '../../Components/AllProducts/AllProducts.jsx';
import "./Home.scss"

export const Home = () => {
  
  return (
    <>
    <div>
      <Carousal/>
    </div>
    <div>
      <h1 className='half-underlined'>ALL PRODUCTS</h1>
      <AllProducts/>
    </div>
    </>
  )
}
