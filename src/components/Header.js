import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.css';
import photo from '../components/ProfilePhoto.js'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin, faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

function Header() {

    const[sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);


  return (
    <div className="header">
      <div className="header-mobile">
        <a className="header-toggle">
          <FontAwesomeIcon icon={faBarsStaggered} onClick={showSidebar} />
        </a>
        <h2>Aziz Matoussi</h2>
      </div>
      <div className={sidebar ? "nav active" : "nav"}>
        <div className="box-image">
          <h3>Aziz Matoussi</h3>
          <img src={photo} alt="" srcset="" />
        </div>
        <ul className="navbar">
          <nav>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                <span className="icon">
                  <HomeIcon />
                </span>{" "}
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                <span className="icon">
                  <PersonIcon />
                </span>{" "}
                About Me
              </NavLink>
            </li>
            
            <li>
              <NavLink
                to="/work"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                <span className="icon">
                  <FontAwesomeIcon icon={faBriefcase} />
                </span>{" "}
                Work
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                <span className="icon">
                  <EmailIcon />
                </span>{" "}
                Contact
              </NavLink>
            </li>
          </nav>
        </ul>
        <div className="rs">
          <a href="https://github.com/AzlaCoding" target="_blank">
            <i>
              <FontAwesomeIcon icon={faGithubSquare} />
            </i>
          </a>
        </div>
        <p className="copyright">2022 © All Right Reserved.</p>
      </div>
    </div>
  );
}

export default Header;