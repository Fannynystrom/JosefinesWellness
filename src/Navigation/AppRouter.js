import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import About from '../screens/About';
import CompressionClothes from '../screens/CompressionClothes';
import Treatments from '../screens/Treatments';
import Lipodem from '../screens/Lipodem'; 
import Navbar from '../components/Navbar'; 

function AppRouter() {
  return (
    <Router>

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', marginBottom: '20px' }}>
  <img 
    src="/images/jjrr.png" 
    alt="Header Image" 
    style={{ 
      width: '50%', 
      height: '100px', 
      boxShadow: '4px -2px 8px rgba(0, 0, 0, 0.1)' 
    }} 
  />
</div>


      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<About />} />
        <Route path="/compression-clothes" element={<CompressionClothes />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/lipodem" element={<Lipodem />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;


