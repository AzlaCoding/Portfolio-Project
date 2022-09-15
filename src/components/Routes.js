import React from 'react';
import '../style/main.css';
import {Routes, Route } from 'react-router-dom';
import Home from './content/Home';
import About from './content/aboutMe/About';

import Contact from './content/Contact';
import Work from './content/Work';
import BackgroundAnimation from './BackgroundAnimation';


function Content() {
  
  return (
   
        <div class="content">
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/about' element={<About />} />
              
              <Route path='/work' element={<Work />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
  );
}

export default Content;