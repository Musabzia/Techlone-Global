import React, { useState, useEffect } from 'react';
import '../css/Illustration.css';
import logo from '../img/tech.png';
import WebBackground from '../img/illustrationcover.png';
import webImg1 from '../img/01.png';
import webImg2 from '../img/02.png';
import webImg3 from '../img/03.png';
import webImg4 from '../img/04.png';
import webImg5 from '../img/07.png';
import webImg6 from '../img/08.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import Footer from '../components/FooterComponent'

import AOS from 'aos';
import 'aos/dist/aos.css';

const IllustrationComponent = () => {
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
        <h1 data-aos='fade-up' data-aos-easing="linear" data-aos-duration="1000">Illustrations</h1>
      </div>

      <div className="web-container">
        <div className="headings">
          <h1>At Techlone</h1>
          <p>Creativity meets strategy. Our designs aren't just visually stunning; they're crafted to amplify your brand's essence. We breathe life into ideas, translating them into captivating visuals that resonate and leave an indelible mark.</p>
        </div>

        <div className="web-services">
          {[webImg1, webImg2, webImg3, webImg4, webImg5, webImg6].map((img, index) => (
            <a href="#!" key={index} onClick={() => openModal(img)}>
              <img src={img} alt={`illustration ${index + 1}`} />
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

        <div className="slider-container">
          <div className="left">
            <a href="../pages/Website.js">
              <i className="fas fa-chevron-left"></i>
            </a>
          </div>

          <div className="center">
            <a href="../pages/Website.js" className="webdev">
              <h1>Web Development</h1>
            </a>

            <a href="../pages/Grapics.js" className="graphic">
              <h1>Artwork and Graphic Designing</h1>
            </a>
          </div>

          <div className="right">
            <a href="../pages/Grapics.js">
              <i className="fas fa-chevron-right"></i>
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

export default IllustrationComponent;
