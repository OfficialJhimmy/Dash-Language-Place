import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../German/index.css";

function FrenchLinks() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="city">
      <h2 className="heading-primary">
        Hi there, get to learn more about France and its Culture
      </h2>
      <div className="city-links">
        <a
          data-aos="zoom-in"
          href="https://france-visas.gouv.fr/web/france-visas/"
          target="_blank"
          rel="noreferrer"
        >
          French Embassy in Nigeria (Official Page)
          <span style={{ fontSize: "25px" }}>&#8594;</span>
        </a>

        <a
          data-aos="zoom-in"
          href="https://www.france-voyage.com/cities-towns/"
          target="_blank"
          rel="noreferrer"
        >
          Cities and Towns in France
          <span style={{ fontSize: "25px" }}>&#8594;</span>
        </a>
        <a
          data-aos="zoom-in"
          href="https://www.worldatlas.com/articles/french-speaking-countries-in-europe.html"
          target="_blank"
          rel="noreferrer"
        >
          French speaking countries in Europe
          <span style={{ fontSize: "25px" }}>&#8594;</span>
        </a>

        <a
          data-aos="zoom-in"
          href="https://www.planetware.com/tourist-attractions/france-f.htm"
          target="_blank"
          rel="noreferrer"
        >
          15 Top-Rated Tourist Attractions in France
          <span style={{ fontSize: "25px" }}>&#8594;</span>
        </a>

        <a
          data-aos="fade-right"
          href="https://www.completefrance.com/living-in-france/work-and-retirement/the-best-places-to-live-and-work-in-france-6287232"
          target="_blank"
          rel="noreferrer"
        >
          Best Cities in France to Work and Live
          <span style={{ fontSize: "25px" }}>&#8594;</span>
        </a>

        <a
          data-aos="zoom-in"
          href="https://www.diplomatie.gouv.fr/en/coming-to-france/studying-in-france/learning-french/article/10-good-reasons-for-learning#:~:text=First%20and%20foremost%2C%20learning%20French,skill%20for%20discussions%20and%20negotiations."
          target="_blank"
          rel="noreferrer"
        >
          Why is it beneficial to learn French?
          <span style={{ fontSize: "25px" }}>&#8594;</span>
        </a>
      </div>
    </div>
  );
}

export default FrenchLinks;
