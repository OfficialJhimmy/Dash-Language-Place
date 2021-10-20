import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import arrow from "../../assets/svg/arrow-right-button.svg";
import "./index.css";

function Button({ title }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <button data-aos="zoom-in" className="btn">
        {title}
        <span className="arrow-icon">
          <img src={arrow} alt="row" />
        </span>
      </button>
    </>
  );
}

export default Button;
