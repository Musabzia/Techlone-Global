import React from 'react';
import '../css/WebCompSlider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const WebCompSlider = ({ slides }) => {
  return (
    <div className="slider-container">
      <div className="left">
        <Link to="">
          <FontAwesomeIcon icon={faChevronLeft} />
        </Link>
      </div>

      <div className="center">
        {slides.map((slide, index) => (
          <Link
            key={index}
            to={slide.link}
            className={`slide ${slide.className}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <h1>{slide.title}</h1>
          </Link>
        ))}
      </div>

      <div className="right">
        <Link to="">
          <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      </div>
    </div>
  );
};

export default WebCompSlider;