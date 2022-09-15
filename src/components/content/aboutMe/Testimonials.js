import React from 'react';
import '../../../style/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';


function Testimonials() {
  
  return (

        <div class="row testimonials mb-70">
            <div className='col-md-12'>
                <div className='subheading'>
                    <h3>Testimonials</h3>
                </div>
                <div className='testimonials-items'>
                <div className='testimonial-item'>
                    <div className='testimonial-content'>
                   <i> <FontAwesomeIcon icon={ faQuoteLeft }/> </i>
                        <p>Ipsum ab necessitatibus numquam vitae quis. Nobis nostrum deserunt suscipit eos fugit.
                            Consectetur dolorum temporibus facilis impedit exercitationem dignissimos.</p>
                    </div>
                    <div className='testimonial-meta'>
                        
                        <div className='meta-info'>
                            <h4>Aziz Matoussi</h4>
                            <p>Student</p>
                        </div>
                    </div>
                </div>
                <div className='testimonial-item'>
                    <div className='testimonial-content'>
                   <i> <FontAwesomeIcon icon={ faQuoteLeft }/> </i>
                        <p>Ipsum ab necessitatibus numquam vitae quis. Nobis nostrum deserunt suscipit eos fugit.
                            Consectetur dolorum temporibus facilis impedit exercitationem dignissimos.</p>
                    </div>
                    <div className='testimonial-meta'>
                        
                        <div className='meta-info'>
                            <h4>Aziz Matoussi</h4>
                            <p>Web Developer</p>
                        </div>
                    </div>
                </div>
                
                </div>
            </div>
        </div>
     
  );
}

export default Testimonials;
