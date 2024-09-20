import React, { useState, useEffect } from 'react';
import '../css/Blockchain.css';
import logo from '../img/tech.png';
import WebBackground from '../img/bitcoin.png';
import blockImg1 from '../img/blockchain3.png';
import blockImg2 from '../img/blockchain1.jpg';
import blockImg3 from '../img/blockchain2.png';
import blockImg4 from '../img/contract.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from '../components/FooterComponent'

const BlockchainComponent = () => {
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
        <h1 data-aos='fade-up' data-aos-easing="linear" data-aos-duration="1000">Blockchain <br />Development</h1>
      </div>

      <div className="web-container">
        <div className="headings">
          <h1>At Techlone</h1>
          <p>Embrace the future of technology with expert blockchain development services. Whether you're a startup exploring blockchain opportunities or an established enterprise seeking to optimize your operations, we have the expertise and resources to bring your vision to life. Get in touch with us today to discuss your blockchain project requirements and take the first step towards innovation and success.</p>
        </div>

        <div className="web-services">
          {[blockImg1, blockImg2, blockImg3, blockImg4].map((img, index) => (
            <a href="#!" key={index} onClick={() => openModal(img)}>
              <img src={img} alt={`blockchain ${index + 1}`} />
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

export default BlockchainComponent;
