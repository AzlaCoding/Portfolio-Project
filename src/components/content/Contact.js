import React from 'react';
import '../../style/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faEnvelope, faMapLocationDot, faPhone,faGlobe } from '@fortawesome/free-solid-svg-icons';


function Contact() {
  
  return (

    <div class="contact">
      <div className="main-container">
            <div className='heading'>
                <span className='icon'><FontAwesomeIcon icon={ faEnvelope } /></span>
                <h2>Conatct</h2>
            </div>
            <div className='row contact-info mb-70'>
                <div className='col-md-3 info-item'>
                    <span className='icon'>
                    <FontAwesomeIcon icon={ faPaperPlane } />
                    </span>
                    <h5>matoussiaziz0@gmail.com</h5>
                </div>
                <div className='col-md-3 info-item'>
                    <span className='icon'>
                    <FontAwesomeIcon icon={ faMapLocationDot } />
                    </span>
                    <h5>beja,tunisia</h5>
                </div>
                <div className='col-md-3 info-item'>
                    <span className='icon'>
                    <FontAwesomeIcon icon={ faPhone } />
                    </span>
                    <h5>+216 93841525</h5>
                </div>
                <div className='col-md-3 info-item'>
                    <span className='icon'>
                    <FontAwesomeIcon icon={ faGlobe } />
                    </span>
                    <h5>www.azizmatoussi.com</h5>
                </div>
            </div>
            <div className='row mb-70'>
                <div className='subheading'>
                    <h3>Send Me An Email</h3>
                </div>
                    <div className='row'>
                    <div className='col-md-6 mb-20'>
                        <span className='input'>
                            <input type="text" class="input-field" id='name' />
                            <label className='input-label' for="name">Name</label>
                        </span>
                    </div>
                    <div className='col-md-6 mb-20'>
                        <span className='input'>
                            <input type="text" class="input-field" id='mail' />
                            <label className='input-label' for="mail">Email</label>
                        </span>
                    </div>
                    <div className='col-md-12 mb-20'>
                        <span className='input'>
                            <input type="text" class="input-field" id='subject' />
                            <label className='input-label' for="subject">Subject</label>
                        </span>
                    </div>
                    <div className='col-md-12 mb-20'>
                        <span className='input'>
                            <textarea class="input-field" id='message' rows="5" cols="33" />
                            <label className='input-label' for="message">Message</label>

                        </span>
                    </div>
                        <div className='col-md-4 mb-20'>
                            <button className='btn-main'>Send Mail</button>
                        </div>
                    </div>
            </div>
        </div>
    </div>

     
  );
}

export default Contact;
