import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/navbarComponents/Navbar';
import KualalampurHotels from './components/KualalampurHotels';
import BangkokHotels from './components/BangkokHotels';
import LondonHotels from './components/LondonHotels';
import TorontoHotels from './components/TorontoHotels';
import SeoulHotels from './components/SeoulHotels';
import TokeyoHotels from './components/TokeyoHotels';
import OsakaHotels from './components/OsakaHotels';
import MelbournHotels from './components/MelbournHotels';
import SydneyHotels from './components/SydneyHotels';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNave';


const App = () => {
  return (
    <div className='bg-white'>
      <Navbar />
      <KualalampurHotels />
      <BangkokHotels />
      <LondonHotels />
      <TorontoHotels />
      <SeoulHotels />
      <TokeyoHotels />
      <OsakaHotels />
      <MelbournHotels />
      <SydneyHotels />
      <Footer />
      <MobileBottomNav />
    </div>
  );
};

export default App;