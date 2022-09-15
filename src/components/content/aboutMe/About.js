import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './services/Services';
import Testimonials from './Testimonials';
import Data from './services/DataServices';



function About() {

  const [services, setServices] = useState(Data);

  return (
    <div className='about-me'>
      <div className="main-container">
          <div className='heading'>
            <span className='icon'><FontAwesomeIcon icon={ faUser }  /></span>
            <h2>About Me</h2>
          </div>
          <div className='row about mb-70'>
            <div className='col-lg-8'>
              <h3 className='mb-20'>Student and Web Developer</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                   dolore magna aliqua.Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                   dolore magna aliqua.Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                   dolore magna aliqua.Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='col-lg-4'>
              <div className='about-info'>
                <h3 className='mb-20'>Personal Information</h3>
                <ul>
                  <li>
                    <span className='title'>Name : </span>
                    <span className='value'>Aziz Matoussi</span>
                  </li>
                  <li>
                    <span className='title'>Age : </span>
                    <span className='value'>15 Years</span>
                  </li>
                  <li>
                    <span className='title'>Residance : </span>
                    <span className='value'>Beja, Tunisia</span>
                  </li>
                  <li>
                    <span className='title'>Address : </span>
                    <span className='value'>beja</span>
                  </li>
                  <li>
                    <span className='title'>Email : </span>
                    <span className='value'>matoussiaziz0@gmail.com</span>
                  </li>
                  <li>
                    <span className='title'>Phone : </span>
                    <span className='value'>+216 93 841 525</span>
                  </li>
                  <li>
                    <span className='title'>Nationality : </span>
                    <span className='value'>Tunisien</span>
                  </li>
                </ul>
                <div className='resume-button'>
                  <button className='btn-main'>Download Resume</button>
                </div>
              </div>
            </div>
          </div>
          <Services services={services} />
          <Testimonials />
      </div>
    </div>
  );
}

export default About;
