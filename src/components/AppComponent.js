import React, { useState, useEffect } from 'react';
import '../css/Application.css';

import WebBackground from '../img/AppCover.png';
import logo from '../img/tech.png';
import webImg1 from '../img/app1.jpg';
import webImg2 from '../img/app2.jpg';
import webImg3 from '../img/app7.jpg';
import webImg5 from '../img/app5.jpg';
import webImg6 from '../img/app6.jpg';

import Footer from '../components/FooterComponent'
import Worktogether from '../components/Worktogether'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AppComponent = () => {
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
      <div className="title-img" style={{ backgroundImage: `url(${WebBackground})` }}>
        <h1 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">Application Development</h1>
      </div>

      <div className="web-container">
        <div className="headings">
          <h1>At Techlone</h1>
          <p>
            Innovation meets mobility with Techlone Global's Mobile App Design. We architect intuitive interfaces that captivate. 
            Our designs aren't just beautiful; they're crafted to enhance user experience, ensuring your app stands out in the palm of your users' hands.
          </p>
        </div>

        <div className="web-services">
          {[webImg1, webImg2, webImg3, webImg5, webImg6].map((img, index) => (
            <a href="#!" key={index} onClick={() => openModal(img)} data-aos="fade-up" data-aos-duration="1000">
              <img src={img} alt={`app ${index + 1}`} />
            </a>
          ))}
        </div>

        {/* Worktogether */}
        <Worktogether/>

        {/* Slider */}
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

export default AppComponent;
