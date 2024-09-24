import React, { useState, useEffect } from 'react';
import '../css/Twitch.css';
import logo from '../img/tech.png';
import WebBackground from '../img/twitchcover.png';
import twitchImg1 from '../img/twitch1.jpeg';
import twitchImg2 from '../img/twitch2.jpeg';
import twitchImg3 from '../img/twitch3.jpeg';
import twitchImg4 from '../img/twitch4.jpeg';
import twitchImg5 from '../img/twitch6.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from '../components/FooterComponent'

const TwitchComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imgSrc) => {
    setModalImage(imgSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="title-img" style={{ backgroundImage: `url(${WebBackground})` }}>
        <h1 data-aos='fade-up' data-aos-easing="linear" data-aos-duration="1000">Twitch Services</h1>
      </div>

      <div className="web-container">
        <div className="headings">
          <h1>At Techlone</h1>
          <p>Transform your Twitch channel with our all-inclusive package. Gain custom overlays and graphics that capture your brand's essence. Manage your stream effortlessly with our tools, engage your audience with proven strategies, and track growth with in-depth analytics. Elevate every aspect of your stream and fuel its success!</p>
        </div>

        <div className="web-services">
          {[twitchImg1, twitchImg2, twitchImg3, twitchImg4, twitchImg5].map((img, index) => (
            <a href="#!" key={index} onClick={() => openModal(img)}>
              <img src={img} alt={`website ${index + 1}`} />
            </a>
          ))}
        </div>

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

        

        {/* Footer */}
        <Footer />

        {modalOpen && (
          <div className="modal">
            <span className="close-modal" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
            <img src={modalImage} alt="Modal View" className="modal-content" />
          </div>
        )}
      </div>
    </>
  );
};

export default TwitchComponent;
