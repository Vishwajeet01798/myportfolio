import React from 'react';
import './index.css';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Project from './routes/Project';

import { Routes,Route } from 'react-router-dom';

function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Contact" element={<Contact/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Project" element={<Project/>}></Route>
   </Routes>
   </>
  );
}

export default App;
