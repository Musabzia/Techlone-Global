import React, { useState, useEffect } from 'react';
import '../css/Twitch.css';

import illustrationBackground from '../img/illustrationcover.png';
import webcover from '../img/web-cover.png';
import twitchBackground from '../img/twitchcover.png';
import twitchvid1 from '../img/twitch2video.mp4';
import twitchvid2 from '../img/twitch3video.mp4';
import twitchvid3 from '../img/twitch4video.mp4';
import twitchvid4 from '../img/twitch5.mp4';
import twitchvid5 from '../img/twitch6video.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/FooterComponent';
import LogoAnime from '../components/LogoAnime';
import Heading from '../components/Heading';
import Slider from '../components/WebCompSlider';
import Worktogether from '../components/Worktogether';

const slides = [
  {
    title: 'Illustration and Digital Sketches',
    image: illustrationBackground,
    link: '/illustrations',
    className: 'webdev',
  },
  {
    title: 'Website Development',
    image: webcover,
    link: '/website',
    className: 'graphic',
  },
];

const videos = [
  { src: twitchvid1, alt: 'Video 1' },
  { src: twitchvid2, alt: 'Video 2' },
  { src: twitchvid3, alt: 'Video 3' },
  { src: twitchvid4, alt: 'Video 4' },
  { src: twitchvid5, alt: 'Video 5' },
];

const TwitchComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalVideo, setModalVideo] = useState(null);

  const openModal = (videoSrc) => {
    setModalVideo(videoSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalVideo(null);
  };

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
          {videos.map((video, index) => (
            <a href="#!" key={index} onClick={() => openModal(video.src)}>
              <video 
                src={video.src} 
                alt={video.alt} 
                loop 
                autoPlay 
                muted
                style={{ width: '75vw', padding: '5px 1em', borderRadius: '8px' }}
              />
            </a>
          ))}
        </div>

        <Worktogether />
        <Slider slides={slides} />
        <Footer />

        {modalOpen && (
          <div className="modal">
            <span className="close-modal" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
            <video 
              className="modal-content" 
              src={modalVideo} 
              loop 
              autoPlay 
              muted
            />
          </div>
        )}
      </div>
    </>
  );
};

export default TwitchComponent;
