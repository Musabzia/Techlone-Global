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
import twitchSlider from '../img/twitchcover.png';  // Import the image
import appCover from '../img/AppCover.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from '../components/FooterComponent';
import Worktogether from '../components/Worktogether';
import Slider from '../components/WebCompSlider';
import Heading from '../components/Heading';
import LogoAnime from '../components/LogoAnime';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

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

  // Prepare slides data for the slider
  const slides = [
    {
      title: 'Twitch Services and Packages',
      image: twitchSlider, // Reference the imported image
      link: '/twitch',
      className: 'twitch',
    },
    {
      title: 'Application Development',
      image: appCover, // Reference the imported image
      link: '/application',
      className: 'application',
    },
  ];

  return (
    <>
      <LogoAnime />
      <div className="title-img" style={{ backgroundImage: `url(${cover})` }}>
        <h1 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
          Website Development
        </h1>
      </div>

      <div className="web-container">
        <div className="web-services">
          {/* Heading */}
          <Heading />

          {[webImg1, webImg2, webImg3, webImg4, webImg5, webImg6, webImg7, webImg8].map((img, index) => (
            <a href="#!" key={index} onClick={() => openModal(img)}>
              <img src={img} alt={`website ${index + 1}`} />
            </a>
          ))}
        </div>

        {/* Worktogether */}
        <Worktogether />

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

export default WebComponent;
