import React, { useState } from "react";
import "./index.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import frankfurt from "../../assets/images/frankfurt.jpg";
import vienna from "../../assets/images/vienna-1.jpg";
import lyon from "../../assets/images/lyon.jpg";
import geneva from "../../assets/images/geneva-1.jpg";
import hamburg from "../../assets/images/hamburg.jpg";
import austria from "../../assets/images/austria.jpg";
import paris from "../../assets/images/paris-1.jpg";
import swizz from "../../assets/images/swizz.jpg";

const images = [
  { title: frankfurt, alt: "Frankfurt a City in Germany" },
  { title: vienna, alt: "Vienna a city in Austria" },
  { title: lyon, alt: "Lyon a city in France" },
  { title: geneva, alt: "Geneva a city in France" },
  { title: hamburg, alt: "Hamburg a city in France" },
  { title: austria, alt: "Vienna a city in France" },
  { title: paris, alt: "Paris a city in France" },
  { title: swizz, alt: "Geneva a city in France" },
];

function SlideShow() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="slider__wrapper">
      <h2 className="heading-primary">Don't you just love this?</h2>
      <p>
        Images of Beautiful Cities in GERMANY, FRANCE, AUSTRIA AND SWITZERLAND{" "}
      </p>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div
            className={idx === imageIndex ? "slide activeSlide" : "slide"}
            key={idx}
          >
            <img src={img.title} alt={img.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SlideShow;
