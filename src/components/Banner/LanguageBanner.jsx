import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ReactCountryFlag from "react-country-flag";
import "./index.css";

function LanguageBanner({ heading, paragraph, countrycode }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="german-container">
      <div data-aos="zoom-in" className="banner-heading">
        <h1>{heading}</h1>
        <p>{paragraph}</p>
      </div>
      <div className="nations-flag">
        <ReactCountryFlag
          countryCode={countrycode}
          svg
          style={{
            width: "8em",
            height: "8em",
          }}
          title={countrycode}
        />
      </div>
    </div>
  );
}

export default LanguageBanner;
