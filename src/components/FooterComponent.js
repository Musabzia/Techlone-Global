import React from 'react';
import logo from '../img/tech.png';
import '../css/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
const FooterComponent = () => {
  return (
    <footer>
      <div className="about">
        <h4>- About</h4>
        <br />
        <p>Welcome to Techlone Global, where innovation meets excellence in the realm of software solutions.</p>
      </div>

      <div className="logo">
        <a href='/'>
        <img src={logo} alt="Techlone Global Logo" />
        </a>
      </div>

      <div className="socialapp">
        <div className="s-logo">
          <a href="https://www.facebook.com/techlonglobal/"><i className="fab fa-facebook"></i></a>
          <a href="https://twitter.com/Techlone_Global"><i className="fab fa-twitter"></i></a>
          <a href="https://www.linkedin.com/company/unavailable/"><i className="fab fa-linkedin"></i></a>
        </div>
        <br />

        <div className="icons">
        
        <a href="https://www.facebook.com/techlonglobal" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>

        <a href="https://x.com/Techlone_Global" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>

        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>

      </div>
        <p>Copyright 2024 / All rights reserved<br />Designed by Techlone</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
