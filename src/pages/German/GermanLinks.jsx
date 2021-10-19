import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./index.css";

function GermanLinks() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="city">
      <h2 className="heading-primary">
        Hi there, get to learn more about Germany and its Culture
      </h2>
      <div className="city-links">
        <a
          data-aos="zoom-in"
          href="https://www.britannica.com/topic/list-of-cities-and-towns-in-Germany-2038874"
          target="_blank"
          rel="noreferrer"
        >
          German Embassy in Nigeria (Official Page)
          <span style={{ fontSize: "25px" }}>&#8594;</span>
        </a>
        <a
          data-aos="zoom-in"
          href="https://www.britannica.com/topic/list-of-cities-and-towns-in-Germany-2038874"
          target="_blank"
          rel="noreferrer"
        >
          List of Cities and Towns in Germany
          <span style={{ fontSize: "25px" }}>&#8594;</span>
        </a>

        <a
          data-aos="zoom-in"
          href="https://travelaway.me/beautiful-places-germany/"
          target="_blank"
          rel="noreferrer"
        >
          Beautiful Places in Germany
          <span style={{ fontSize: "25px" }}>&#8594;</span>
        </a>

        <a
          data-aos="fade-right"
          href="https://www.internationalcitizens.com/working-abroad/best/cities-germany.php"
          target="_blank"
          rel="noreferrer"
        >
          Best Cities in Germany to Work
          <span style={{ fontSize: "25px" }}>&#8594;</span>
        </a>

        <a
          data-aos="zoom-in"
          href="https://www.gisma.com/blog/why-is-it-beneficial-to-learn-german"
          target="_blank"
          rel="noreferrer"
        >
          Why is it beneficial to learn German?
          <span style={{ fontSize: "25px" }}>&#8594;</span>
        </a>
      </div>
    </div>
  );
}

export default GermanLinks;
