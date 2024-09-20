import React from 'react';
import logo from '../img/tech.png';
import '../css/footer.css'
const FooterComponent = () => {
  return (
    <footer>
      <div className="about">
        <h4>- About</h4>
        <br />
        <p>Welcome to Techlone Global, where innovation meets excellence in the realm of software solutions.</p>
      </div>

      <div className="logo">
        <img src={logo} alt="Techlone Global Logo" />
      </div>

      <div className="socialapp">
        <div className="s-logo">
          <a href="https://www.facebook.com/techlonglobal/"><i className="fab fa-facebook"></i></a>
          <a href="https://twitter.com/Techlone_Global"><i className="fab fa-twitter"></i></a>
          <a href="https://www.linkedin.com/company/unavailable/"><i className="fab fa-linkedin"></i></a>
        </div>
        <br />
        <p>Copyright 2024 / All rights reserved<br />Designed by Techlone</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
