import React, { useState, useEffect } from 'react';
import '../css/Blockchain.css';
import BlockBackground from '../img/bitcoin.png';
import illustrationBackground from '../img/illustrationcover.png';
import GraphicBackground from '../img/graphiccover.png';
import blockImg1 from '../img/blockchain3.png';
import blockImg2 from '../img/blockchain1.jpg';
import blockImg3 from '../img/blockchain2.png';
import blockImg4 from '../img/contract.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from '../components/FooterComponent';
import LogoAnime from '../components/LogoAnime';
import Worktogether from '../components/Worktogether';
import Slider from '../components/WebCompSlider';

const BlockchainComponent = () => {
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
      title: 'Artwork and Graphic Design',
      image: GraphicBackground, // Reference the imported image
      link: '/graphics',
      className: 'webdev',
    },
    {
      title: 'Illustration and Digital Sketches',
      image: illustrationBackground, // Reference the imported image
      link: '/illustrations',
      className: 'graphic',
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <LogoAnime />
      <div className="blocktitle-img" style={{ backgroundImage: `url(${BlockBackground})` }}>
        <h1 data-aos='fade-up' data-aos-easing="linear" data-aos-duration="1000">
          Blockchain <br />Development
        </h1>
      </div>

      <div className="block-container">
        <div className="headings">
          <h1>At Techlone</h1>
          <p>Embrace the future of technology with expert blockchain development services. Whether you're a startup exploring blockchain opportunities or an established enterprise seeking to optimize your operations, we have the expertise and resources to bring your vision to life. Get in touch with us today to discuss your blockchain project requirements and take the first step towards innovation and success.</p>
        </div>

        <div className="block-services">
          {[blockImg1, blockImg2, blockImg3, blockImg4].map((img, index) => (
            <a href="#!" key={index} onClick={() => openModal(img)}>
              <img src={img} alt={`blockchain ${index + 1}`} />
            </a>
          ))}
        </div>

        {/* WorkTogether */}

        <Worktogether />

        {/* Slider */}

        <Slider slides={slides} />


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
