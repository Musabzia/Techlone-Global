import React, { useState, useEffect } from 'react';
import '../css/Graphic.css';
import GraphicBackground from '../img/graphiccover.png';
import BlockBackground from '../img/bitcoin.png';
import AppBackground from '../img/AppCover.png';

import graphicImg1 from '../img/graphic12.png';
import graphicImg2 from '../img/graphic8.png';
import graphicImg3 from '../img/graphic.png';
import graphicImg4 from '../img/graphic10.png';
import graphicImg5 from '../img/graphic6.png';
import graphicImg6 from '../img/graphic7.png';
import graphicImg7 from '../img/graphic3.png';
import graphicImg8 from '../img/graphic4.png';
import graphicImg9 from '../img/graphic5.png';
import graphicImg10 from '../img/graphic9.png';
import graphicImg11 from '../img/graphic11.png';
import graphicImg12 from '../img/graphic13.png';

import Footer from '../components/FooterComponent';
import LogoAnime from '../components/LogoAnime';
import Heading from '../components/Heading';
import Worktogether from '../components/Worktogether';
import Slider from '../components/WebCompSlider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';


const GraphicComponent = () => {

  const slides = [
    {
      title: 'Application Development',
      image: AppBackground, // Reference the imported image
      link: '/application',
      className: 'webdev',
    },
    {
      title: 'Blockchain Development',
      image: BlockBackground, // Reference the imported image
      link: '/blockchain',
      className: 'graphic',
    },
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
      <div className="graphictitle-img" style={{ backgroundImage: `url(${GraphicBackground})` }}>
        <h1 data-aos='fade-up' data-aos-easing="linear" data-aos-duration="1000">Graphic Designing</h1>
      </div>

      <div className="graphic-container">
        <div className="headings">
          <h1>At Techlone</h1>
          <p>Creativity meets strategy. Our designs aren't just visually stunning; they're crafted to amplify your brand's essence. We breathe life into ideas, translating them into captivating visuals that resonate and leave an indelible mark.</p>
        </div>

        <div className="graphic-services">

          {[graphicImg1, graphicImg2, graphicImg3, graphicImg4,
            graphicImg5, graphicImg6, graphicImg7, graphicImg8,
            graphicImg9, graphicImg10, graphicImg11, graphicImg12].map((img, index) => (

            <a href="#!" key={index} onClick={() => openModal(img)}>

              <img src={img} alt={`graphic ${index + 1}`} />

              



</a>
          ))}
          {/* Worktogether */}
          <Worktogether />
          
          {/* Slider */}
          <Slider slides={slides} />

          {/* Footer */}
          <Footer />
          </div>

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
