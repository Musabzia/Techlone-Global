import React, { useState } from 'react';
import '../css/WebCompSlider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const WebCompSlider = ({ slides }) => {
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

  return (
    <div className="slider-container">
      <div className="left">
        <Link to="/twitch">
          <FontAwesomeIcon icon={faChevronLeft} />
        </Link>
      </div>

      <div className="center">
        {slides.map((slide, index) => (
          <Link
            key={index}
            to={slide.link}
            className={slide.className}
            onClick={() => openModal(slide.image)}
          >
            <h1>{slide.title}</h1>
          </Link>
        ))}
      </div>

      <div className="right">
        <Link to="/application">
          <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      </div>

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
  );
};

export default WebCompSlider;
