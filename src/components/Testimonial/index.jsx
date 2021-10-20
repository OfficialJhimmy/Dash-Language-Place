import React from "react";
import Slider from "react-slick";
import "./index.css";
import { TestimonialData } from "../../data/TestimonialData";

function Testimonial() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };
  return (
    <>
      <div className="testimonial">
        <h2 className="heading-primary">
          No need to brag, but see what others are saying about us!
        </h2>

        <Slider {...settings}>
          {TestimonialData.map((data, index) => (
            <div className="testimonial__container-box" key={index}>
              <div className="user-info-container">
                <div className="user-text">
                  <p>{data.review}</p>
                  <h3>{data.fullName}</h3>
                </div>

                <div className="user-img">
                  <img
                    src={data.img}
                    alt="One of our Amazing Customers. Dash Language School!"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Testimonial;
