import React, { useState, useEffect } from 'react';
import '../css/Website.css';

import cover from '../img/web-cover.png';

import webImg1 from '../img/website1.png';
import webImg2 from '../img/website2.png';
import webImg3 from '../img/website3.png';
import webImg4 from '../img/website4.png';
import webImg5 from '../img/website5.png';
import webImg6 from '../img/website6.png';
import webImg7 from '../img/website7.png';
import webImg8 from '../img/website8.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from '../components/FooterComponent'
import Worktogether from '../components/Worktogether'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';



const WebComponent = () => {
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

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="title-img" style={{ backgroundImage: `url(${cover})` }}>
        <h1 data-aos='fade-up' data-aos-easing="linear" data-aos-duration="1000">Website Development</h1>
      </div>

      <div className="web-container">
        

        <div className="web-services">
          
        <div className="headings">
          <h1 >At Techlone</h1>
          <p>We redefine digital presence through Website Design. We blend aesthetics with functionality, creating immersive online experiences. Our designs are more than just pixels; they're gateways that engage and inspire.</p>
        </div>

          {[webImg1, webImg2, webImg3, webImg4, webImg5, webImg6, webImg7, webImg8].map((img, index) => (
            <a href="#!" key={index} onClick={() => openModal(img)}>
              <img src={img} alt={`website ${index + 1}`} />
            </a>
          ))}
        </div>

        {/* Worktogether */}
        <Worktogether/>
        {/* Worktogether */}

        {/* Slider */}
        <div className="slider-container">
          <div className="left">
            <a href="../pages/Twitch.js">
              <FontAwesomeIcon icon={faChevronLeft} />
            </a>
          </div>

          <div className="center">
            <a href="../pages/Twitch.js" className="webdev">
              <h1>Web Development</h1>
            </a>

            <a href="../pages/Application.js" className="graphic">
              <h1>Artwork and Graphic Designing</h1>
            </a>
          </div>

          <div className="right">
            <a href="../pages/Application.js">
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </div>
        </div>

        {/* Footer */}
        <Footer />
                 

        {/* Modal */}
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

export default WebComponent;