import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./index.css";

function WhyLanguage({ title, about, anotherparagraph, paragraph, standard }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="why-language">
        <h2 data-aos="fade-up" className="heading-primary">
          {title}
        </h2>
        <div data-aos="zoom-in" className="why-info">
          <p>{about}</p>
          <p>{anotherparagraph}</p>
          <p>{paragraph}</p>
          <p>{standard}</p>
        </div>
      </div>
    </>
  );
}

export default WhyLanguage;
