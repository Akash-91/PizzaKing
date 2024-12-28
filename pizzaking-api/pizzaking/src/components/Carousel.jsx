import React from "react";
import Slider from "react-slick";
import "./Carousel.css";

const Carousel = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...carouselSettings}>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Pizza 1" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Pizza 2" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Pizza 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
