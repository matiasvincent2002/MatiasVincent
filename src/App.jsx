import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './View/Home/Home';
import About from './View/About/About';

import Portfolio from './View/Portfolio/Portfolio';
import Navbar from './components/navBar/NavBar.jsx';
import style from './app.module.css'
function App() {
const location = useLocation(); // Obtén la ubicación actual

  return (
    <div className={style['app-container']}>
      <Navbar location={location} /> {/* Pasa la ubicación como prop a Navbar */}
     
      <Routes>
        <Route path="MatiasVincent/" element={<Home />} />
        <Route path='MatiasVincent/about' element={<About />} />
        <Route path='MatiasVincent/portfolio' element={<Portfolio/>}/>
      </Routes>
    </div>
  );
}

export default App;
