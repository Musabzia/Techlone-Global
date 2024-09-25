import React, { useState, useEffect } from 'react';
import '../css/Illustration.css'; 

import illustrationBackground from '../img/illustrationcover.png';
import BlockBackground from '../img/bitcoin.png';
import twitchBackground from '../img/twitchcover.png';
import illustrationImg1 from '../img/01.png';
import illustrationImg2 from '../img/02.png';
import illustrationImg3 from '../img/03.png';
import illustrationImg4 from '../img/04.png';
import illustrationImg5 from '../img/07.png';
import illustrationImg6 from '../img/08.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Footer from '../components/FooterComponent';
import LogoAnime from '../components/LogoAnime';
import Heading from '../components/Heading';
import Worktogether from '../components/Worktogether';
import Slider from '../components/WebCompSlider';

import AOS from 'aos';
import 'aos/dist/aos.css';

const IllustrationComponent = () => {
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

  const slides = [
    {
      title: 'Blockchain Development',
      image: BlockBackground, // Reference the imported image
      link: '/blockchain',
      className: 'webdev',
    },
    {
      title: 'Twitch Services and Packages',
      image: twitchBackground, // Reference the imported image
      link: '/twitch',
      className: 'graphic',
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <LogoAnime />
      <div className="illustrationtitle-img" style={{ backgroundImage: `url(${illustrationBackground})` }}>
        <h1 data-aos='fade-up' data-aos-easing="linear" data-aos-duration="1000">Illustrations</h1>
      </div>

      <div className="illustration-container">
        {/* Heading */}
          <Heading />
          
        

        <div className="illustration-services">
          {[illustrationImg1, illustrationImg2, illustrationImg3, illustrationImg4, illustrationImg5, illustrationImg6].map((img, index) => (
            <a href="#!" key={index} onClick={() => openModal(img)}>
              <img src={img} alt={`illustration ${index + 1}`} />
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

export default IllustrationComponent;
