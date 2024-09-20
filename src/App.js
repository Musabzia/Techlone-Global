import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimatedCursor from "react-animated-cursor"
import Home from './pages/Home';
import Twitch from './pages/Twitch';
import Website from './pages/Website';
import Application from './pages/Application';
import Graphics from './pages/Graphics';
import Blockchain from './pages/Blockchain';
import Illustrations from './pages/Illustrations';
import AOS from 'aos'
import 'aos/dist/aos.css'



function App() {
  useEffect(() =>{
    AOS.init();
  }, [])
  return (
    <>
    
    <Router>
      <div className="App">
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
    </div>
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
    </Router>
    </>
  );
}

export default App;
