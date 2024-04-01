import React from 'react';
import './App.css';
import '../src/css/laptop.css';
import '../src/css/tablet.css';
import '../src/css/mobile.css';
import Home from './components/Home.js';
import About from './components/About.js';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart.js';

function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </div>
  );
}

export default App;
