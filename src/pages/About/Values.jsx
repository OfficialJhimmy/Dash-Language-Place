import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Values() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="values__container">
      <h2 data-aos="zoom-in" className="heading-primary">
        Our Core Values
      </h2>
      <p data-aos="zoom-in">
        We are a Focused Institution and We never take our eyes off our targets.
        Read through our Mission and Vison statements and get to know why we
        remain Focused.
      </p>
      <div className="values__wrapper">
        <div data-aos="fade-up" className="values__statements">
          <h3>Our Mission</h3>
          <p>
            Our Mission is to build a multi-lingual society through our years of
            experience in educating foreign languages and helping the young and
            old to be globally relevant.
          </p>
        </div>
        <div data-aos="fade-up" className="values__statements">
          <h3>Our Vision</h3>
          <p>
            Our Vision is to remain the leader in spreading and teaching foreign
            languages worldwide and also to give opportunities to different
            people from different backgrounds to acquire languages and cultural
            competencies of another world through the knowledgeable skills from
            our Language expertise at DASH.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Values;
