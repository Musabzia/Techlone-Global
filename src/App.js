import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WebCompSlider from './components/WebCompSlider';
import AnimatedCursor from 'react-animated-cursor';
import Home from './pages/Home';
import Twitch from './pages/Twitch';
import Website from './pages/Website';
import Application from './pages/Application';
import Graphics from './pages/Graphics';
import Blockchain from './pages/Blockchain';
import Illustrations from './pages/Illustrations';
import AOS from 'aos';
import 'aos/dist/aos.css';

import LogoAnime from './components/LogoAnime'; // LogoAnime component

import webCover from './img/web-cover.png';
import graphicCover from './img/graphiccover.png';
import twitchCover from './img/twitchcover.png';
import blockchaincover from './img/bitcoin.png';
import illustrationCover from './img/illustrationcover.png';
import appCover from './img/AppCover.png';

const slides = [
  {
    title: 'Web Development',
    image: webCover,
    link: '/website',
    className: 'webdev',
  },
  {
    title: 'Artwork and Graphic Designing',
    image: graphicCover,
    link: '/graphics',
    className: 'graphic',
  },
  {
    title: 'Twitch Services and Packages',
    image: twitchCover,
    link: '/twitch',
    className: 'twitch',
  },
  {
    title: 'Blockchain Development',
    image: blockchaincover,
    link: '/blockchain',
    className: 'blockchain',
  },
  {
    title: 'Illustrations and Digital Sketches',
    image: illustrationCover,
    link: '/illustrations',
    className: 'illustration',
  },
  {
    title: 'Application Development',
    image: appCover,
    link: '/application',
    className: 'application',
  },
];

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Router>
        <div className="App">
          
          {/* Add the AnimatedCursor */}
          <AnimatedCursor
            innerSize={8}
            outerSize={8}
            color='193, 11, 111'
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
            clickables={[
              'a',
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              'label[for]',
              'select',
              'textarea',
              'button',
              '.link'
            ]}
          />

          {/* Add the LogoAnime component in the top-left corner */}
          

          <div className="container">
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/twitch" element={<Twitch />} />
              <Route path="/website" element={<Website />} />
              <Route path="/application" element={<Application />} />
              <Route path="/graphics" element={<Graphics />} />
              <Route path="/blockchain" element={<Blockchain />} />
              <Route path="/illustrations" element={<Illustrations />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
