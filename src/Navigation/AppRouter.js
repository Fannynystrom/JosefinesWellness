// src/navigation/AppRouter.js
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

<header>
<img src="/images/sign-png.png" alt="Header Image" style={{ width: '100%', height: '190px', marginTop: '20px', marginBottom: '20px' }} />
</header>
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


