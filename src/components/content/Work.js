import React from 'react';
import '../../style/main.css';
import work1 from '../../images/work1.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare} from '@fortawesome/free-brands-svg-icons';


function Work() {
  
  return (
    <div class="work">
      <div className="main-container">
        <div className="heading">
          <span className="icon">
            <FontAwesomeIcon icon={faBriefcase} />
          </span>
          <h2>Work</h2>
        </div>
        <div className="work-items mb-20">
          <div className="main-item mb-20">
            <div className="item">
              <div className="image-item">
                <img src={work1} />
                <ul>
                  <li>
                    <a
                      href="https://github.com/AzlaCoding/Movie-Checkpoint"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faGithubSquare} />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FontAwesomeIcon icon={faLink} />
                    </a>
                  </li>
                </ul>
              </div>
              <h6>Movie App</h6>
              <p>Created with ReactJS.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;



