import React from 'react'; // Corrected the React import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../css/Worktogether.css';

const Worktogether = () => {
  return (
    <div className="oval">

      <a className="worktogether" href="https://techloneglobal.com/">
        <h1>Let's work together</h1>
      </a>

      <div className="icons">
        
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>

        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>

        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>

      </div>
    </div>
  );
};


export default Worktogether;
