import React from 'react';
import '../../style/main.css';
import TypeWriterEffect from 'react-typewriter-effect';
import { NavLink } from 'react-router-dom';
import BackgroundAnimation from '../BackgroundAnimation';






function Home() {
  return (
    <div className="home">
      <BackgroundAnimation />

      <div className="info">
        <h2>Hi, I am Aziz Matoussi</h2>
        <p>
          <TypeWriterEffect
            textStyle={{
              fontSize: "32px",
              fontWeight: "800",
              color: "#333333",
              lineHeight: "1.9",
              margin: "10px 0",
              color: "#007bff",
              textAlign: "center",
            }}
            startDelay={500}
            cursorColor="black"
            text="Web Developer and Game Developer"
            typeSpeed={100}
          />
        </p>
        <p className="description">
          I am a web developer and game developper who loves to create and build
          exciting and challenging projects and web applications. I also love to
          learn new technologies.
        </p>
        <nav>
          <NavLink to="/about">
            <button className="btn-download">Download Resume</button>
          </NavLink>
          <NavLink to="/contact">
            <button className="btn-contact">Contact Me</button>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Home;
