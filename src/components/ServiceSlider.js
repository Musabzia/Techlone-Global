import React, { useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/ServiceSlider.css';
import twitchCover from '../img/twitchcover.png';
import webCover from '../img/web-cover.png';
import appCover from '../img/AppCover.png';
import graphicCover from '../img/graphiccover.png';
import bitcoinCover from '../img/bitcoin.png';
import illustrationCover from '../img/illustrationcover.png';
import LogoAnime from '../components/LogoAnime';





const services = [
  { id: 1, title: 'Twitch Packages and Services', imageUrl: twitchCover, link: '/twitch' },
  { id: 2, title: 'Web Development', imageUrl: webCover, link: '/website' },
  { id: 3, title: 'Application Development', imageUrl: appCover, link: '/application' },
  { id: 4, title: 'Artwork and Graphic Designing', imageUrl: graphicCover, link: '/graphics' },
  { id: 5, title: 'Blockchain Development', imageUrl: bitcoinCover, link: '/blockchain' },
  { id: 6, title: 'Illustrations and Digital Sketches', imageUrl: illustrationCover, link: '/illustrations' },
];

const ServiceSlider = () => {
  
  const [dragging, setDragging] = useState(false);

  const handleBeforeChange = () => {
    setDragging(true);
  };

  const handleAfterChange = () => {
    setDragging(false);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
  };

  return (
    

    <div className="service-slider-wrapper">
      
      <div className="service-slider">
        <LogoAnime />
        <Slider {...settings}>
          {services.map((service) => (
            <div key={service.id} className="slide">
              <Link
                to={dragging ? "#" : service.link}
                onClick={e => dragging && e.preventDefault()}
              >
                <img src={service.imageUrl} alt={service.title} />
                <h3>{service.title}</h3>
                <h2>View</h2>
              </Link>
            </div>
          ))}
        </Slider>
        
      </div>
    </div>
  );
};

export default ServiceSlider;
