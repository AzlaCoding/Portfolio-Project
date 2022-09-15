import React from 'react';
import '../../../../style/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsToEye } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode, faCamera, faSquareShareNodes, faFileLines, faDisplay } from '@fortawesome/free-solid-svg-icons';





function Services({services}) {
  
  return (
    <div class="row services mb-70">
      <div className='col-md-12'>
          <div className='subheading'>
            <h3>Services</h3>
          </div>
      </div>
      

        
      <div className='boxes'>
      { 

        services.map((items) => 
            <div className='service-box'>
                <div className='icon'>
                    <i> <FontAwesomeIcon icon={items.icon} /></i> 
                </div>
                <h4>{items.title}</h4>
                <p>{items.description}</p>
            </div>
             ) } 
      </div>   
     
    </div>

     
  );
}

export default Services;
