import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import aboutimage from "../../assets/images/Image2.jpg";

import "./index.css";

function Aboutus() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="about-us__container">
      <h2 data-aos="fade-right" className="heading-primary">
        Hello, this is a brief introduction about Dash Language School
      </h2>
      <div className="about-us__wrapper">
        <div data-aos="fade-left" className="about-us__info">
          <h3>DASH LANGUAGE SCHOOL</h3>
          <p>
            We at DASH are the forerunner of educating foreign languages and
            making the languages to be simple, inexpensive and be accessible for
            all ages, organizations and professions to acquire the educational,
            cultural and Linguistic ways of countries like Germany and
            French-speaking countries. Our services are German and French for
            all levels: A1 Introduction, A2 elementary B1 intermediate, B2
            advance Intermediate, C1 advance. Our teachers are qualified and
            well trained in this teaching and they will help you to achieve the
            goals of acquiring the languages at a quickness of time. German and
            French are some of the most spoken languages in Europe and have
            gained a lot of acclaims and become foreign languages to non-native
            speakers. In addition, learning any of these languages can build
            your confidence and open a lot of jobs opportunities for you.
          </p>
        </div>
        <div data-aos="fade-right" className="about-us__image-wrapper">
          <img src={aboutimage} alt="Classroom DashLanguageSchool" />
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
