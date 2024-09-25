import React, { useState, useEffect } from 'react';
import '../css/Twitch.css';
import logo from '../img/tech.png';
import illustrationBackground from '../img/illustrationcover.png';
import webcover from '../img/web-cover.png';
import twitchBackground from '../img/twitchcover.png';
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
import LogoAnime from '../components/LogoAnime';
import Heading from '../components/Heading';
import Slider from '../components/WebCompSlider';
import Worktogether from '../components/Worktogether';

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

  const slides = [
    {
      title: 'Illustration and Digital Sketches',
      image: illustrationBackground, // Reference the imported image
      link: '/illustration',
      className: 'webdev',
    },
    {
      title: 'Website Development',
      image: webcover, // Reference the imported image
      link: '/website',
      className: 'graphic',
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <LogoAnime />
      <div className="twitchtitle-img" style={{ backgroundImage: `url(${twitchBackground})` }}>
        <h1 data-aos='fade-up' data-aos-easing="linear" data-aos-duration="1000">Twitch Services</h1>
      </div>

      <div className="twitch-container">
        <Heading />

        <div className="twitch-services">
          {[twitchImg1, twitchImg2, twitchImg3, twitchImg4, twitchImg5].map((img, index) => (
            <a href="#!" key={index} onClick={() => openModal(img)}>
              <img src={img} alt={`website ${index + 1}`} />
            </a>
          ))}
        </div>

        
        {/* Work together */}
        <Worktogether />

        {/* Slider */}
        <Slider slides={slides} />

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
