import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/navbarComponents/Navbar';
import KualalampurHotels from './components/KualalampurHotels';
import BangkokHotels from './components/BangkokHotels';
import LondonHotels from './components/LondonHotels';
import TorontoHotels from './components/TorontoHotels';


const App = () => {
  return (
    <div className='bg-white'>
      <Navbar />
      <KualalampurHotels />
      <BangkokHotels />
      <LondonHotels />
      <TorontoHotels />
      {/* <div className="h-[200vh] bg-gray-50"> 
      </div> */}
    </div>
  );
};

export default App;