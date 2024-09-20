import React, { useState, useEffect } from 'react';
import '../css/Graphic.css';

import WebBackground from '../img/landing.png';
import logo from '../img/tech.png';
import webImg1 from '../img/graphic12.png';
import webImg2 from '../img/graphic8.png';
import webImg3 from '../img/graphic.png';
import webImg4 from '../img/graphic10.png';
import webImg5 from '../img/graphic6.png';
import webImg6 from '../img/graphic7.png';
import webImg7 from '../img/graphic3.png';
import webImg8 from '../img/graphic4.png';
import webImg9 from '../img/graphic5.png';
import webImg10 from '../img/graphic9.png';
import webImg11 from '../img/graphic11.png';
import webImg12 from '../img/graphic13.png';

import Footer from '../components/FooterComponent'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import AOS from 'aos';
import 'aos/dist/aos.css';

const GraphicComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imgSrc) => {
    setModalImage(imgSrc);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
    document.body.style.overflow = 'unset'; // Re-enable background scrolling
  };

  const images = [
    webImg1, webImg2, webImg3, webImg4,
    webImg5, webImg6, webImg7, webImg8,
    webImg9, webImg10, webImg11, webImg12
  ];
  
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="title-img" style={{ backgroundImage: `url(${WebBackground})` }}>
        <h1>Graphic Designing</h1>
      </div>

      <div className="web-container">
        <div className="headings">
          <h1>At Techlone</h1>
          <p>Creativity meets strategy. Our designs aren't just visually stunning; they're crafted to amplify your brand's essence. We breathe life into ideas, translating them into captivating visuals that resonate and leave an indelible mark.</p>
        </div>

        {/* Group of Side-by-Side Images */}
        <div className="web-services">

          {images.map((img, index) => (
            index % 2 === 0 && (
              <div className="side-by-side-images" key={index}>
                <a href="#!" onClick={() => openModal(images[index])}>
                  <img src={images[index]} alt={`graphic ${index + 1}`} />
                </a>
                {images[index + 1] && (
                  <a href="#!" onClick={() => openModal(images[index + 1])}>
                    <img src={images[index + 1]} alt={`graphic ${index + 2}`} />
                  </a>
                )}
                
              </div>
            )
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
              <FontAwesomeIcon icon={faChevronLeft} />
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
              <FontAwesomeIcon icon={faChevronRight} />
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

export default GraphicComponent;
