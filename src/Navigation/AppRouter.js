// src/navigation/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import About from '../screens/About';
import CompressionClothes from '../screens/CompressionClothes';
import Treatments from '../screens/Treatments';
import Navbar from '../components/Navbar'; 

function AppRouter() {
  return (
    <Router>
      <Navbar /> {/* Lägg till navigeringskomponenten här */}
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<About />} />
        <Route path="/compression-clothes" element={<CompressionClothes />} />
        <Route path="/treatments" element={<Treatments />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
