import './banner.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { TypeAnimation } from 'react-type-animation';



function Banner() {
  const handleResumeClick = () => {
    window.open('/Nayan_resume.pdf', '_blank');
  };

  return (
    <div className="banner-container" id="home">
      <div className='centre'>
        <div className="banner-dev-image"></div>
          <div className="touch">
            <a href="https://github.com/nayanghosh-2002" target="_blank" rel="noopener noreferrer" className="icon" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://x.com/itsnayangh" target="_blank" rel="noopener noreferrer" className="icon" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com/in/nayanghosh2002/" target="_blank" rel="noopener noreferrer" className="icon" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
      </div>
      
      <div className="banner-intro-text">
        <p>
          <span className="highlighted-text" >Namaste! </span>
          I'm
        </p>
        <span className="banner-intro-name">Nayan Ghosh</span>

        
        
      

        <p className="banner-intro-subtext">
          A passionate&nbsp;
          <TypeAnimation
            sequence={[
            'Coder', 1500,
            'Frontend Developer', 1500,
            'Blockchain Enthusiast', 1500,
            'Full-Stack Developer', 1500,
            'Musician', 1500,
            'Learner', 1500,
            'Chess Player', 1500,
            'Guitarist', 1500,
            'UI/UX Designer', 1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </p>



        <div className="contact-button-wrapper">
          <a href="#contact" className="contact-slide-button">
            <span className="contact-slide-content">Hire Me</span>
            
          </a>
          <a onClick={handleResumeClick} target="_blank" rel="noopener noreferrer" className="contact-slide-button">
            <span className="contact-slide-content">Resume</span>
            
          </a>
        </div>
      </div>
      
      
    </div>
  );
}

export default Banner;
