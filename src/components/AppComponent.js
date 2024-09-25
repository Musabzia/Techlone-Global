import React, { useState, useEffect } from 'react';
import '../css/Application.css';

import AppBackground from '../img/AppCover.png';
import webcover from '../img/web-cover.png';
import GraphicBackground from '../img/graphiccover.png';
import AppImg1 from '../img/app1.jpg';
import AppImg2 from '../img/app2.jpg';
import AppImg3 from '../img/app7.jpg';
import AppImg5 from '../img/app5.jpg';
import AppImg6 from '../img/app6.jpg';

import Footer from '../components/FooterComponent'
import Worktogether from '../components/Worktogether'
import Slider from '../components/WebCompSlider';
import Heading from '../components/Heading';
import LogoAnime from '../components/LogoAnime';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import AOS from 'aos';
import 'aos/dist/aos.css';

const AppComponent = () => {
  const slides = [
    {
      title: 'Web Development',
      image: webcover, // Use actual images here
      link: '/website',
      className: 'webdev',
    },
    {
      title: 'Artwork and Graphic Designing',
      image: GraphicBackground, // Use actual images here
      link: '/graphics',
      className: 'graphic',
    }
  ];
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
    <LogoAnime />
      <div className="apptitle-img" style={{ backgroundImage: `url(${AppBackground})` }}>
        <h1 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">Application Development</h1>
      </div>

      <div className="app-container">
        <Heading />

        <div className="app-services">
          {[AppImg1, AppImg2, AppImg3, AppImg5, AppImg6].map((img, index) => (
            <a href="#!" key={index} onClick={() => openModal(img)} data-aos="fade-up" data-aos-duration="1000">
              <img src={img} alt={`app ${index + 1}`} />
            </a>
          ))}
        </div>

        {/* Worktogether */}
        <Worktogether/>

        {/* Slider */}
        <Slider slides={slides} />
        

      
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
