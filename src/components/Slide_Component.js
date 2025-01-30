import React, { useState } from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import video1 from '../images/videos/slidervideo1.mp4';
import video2 from '../images/videos/slidervideo2.mp4';
import video3 from '../images/videos/slidervideo3.mp4';
import video4 from '../images/videos/slidervideo4.mp4';

import './Slide_Component.css';

const SliderComponent = () => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const slides = [
    {
      src: video1,
      title: "Prepare for the future with our advisors.",
      subtitle: "We are the experts in this industry with over a hundred years of experience. That means you’re going to get the right solution.",
      buttonLabel: "Meet Experts",
      buttonAction: () => navigate("/about-us"),
    },
    {
      src: video2,
      title: "Explore Our World-Class Services.",
      subtitle: "From consulting to execution, we deliver tailored solutions to help your business thrive in a competitive landscape.",
      buttonLabel: "View Services",
      buttonAction: () => navigate("/services"),
    },
    {
      src: video3,
      title: "Join a Team That Values Growth and Innovation.",
      subtitle: "Discover your potential and make an impact with a career that challenges and inspires you every day.",
      buttonLabel: "Explore Careers",
      buttonAction: () => navigate("/careers"),
    },
    {
      src: video4,
      title: "Connect With Us for Exceptional Support.",
      subtitle: "Reach out to us for personalized assistance and explore how we can help you achieve your goals.",
      buttonLabel: "Contact Us",
      buttonAction: () => navigate("/contact"),
    },
  ];

  const NextArrow = ({ onClick }) => (
    <div className="next-arrow" onClick={onClick}>
      &#8594;
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "linear",
    nextArrow: <NextArrow />,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <video
              src={slide.src}
              className="slider-video"
              autoPlay
              loop
              muted
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            />
            <div className="slider-content">
              <h1 className="slider-title">{slide.title}</h1>
              <div className={`slider-info ${hovered ? 'show' : ''}`}>
                <p className="slider-subtitle">{slide.subtitle}</p>
                <button className="slider-button" onClick={slide.buttonAction}>
                  {slide.buttonLabel}
                </button>
              </div>
            </div>
            <button className="toggle-button" onClick={slide.buttonAction}>
              &#9679;
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
