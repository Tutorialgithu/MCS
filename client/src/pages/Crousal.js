// App.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import restaurant from "../assets/images/restaurant.jpg";
import saloon from "../assets/images/saloon.jpg";
import tiffin from "../assets/images/tiffin.png";
import travels from "../assets/images/travels.jpg";
import repair from "../assets/images/repair.jpg";


const ImageCarousel = () => {
  const carouselData = [
    { imageUrl: repair, altText: 'Image 1' },
    { imageUrl: restaurant, altText: 'Image 2' },
    { imageUrl: saloon, altText: 'Image 3' },
    { imageUrl: tiffin, altText: 'Image 4' },
    { imageUrl: travels, altText: 'Image 5' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set the duration for each slide (in milliseconds)
  };


  return (
    <Slider {...settings}>
      {carouselData.map((item, index) => (
        <div key={index}>
          <img src={item.imageUrl} alt={item.altText} style={{ width: '100%' }} />
        </div>
      ))}
    </Slider>
  );
};

const Crousal = () => {
  return (
    <div>
      
      <ImageCarousel />
    </div>
  );
};

export default Crousal;
