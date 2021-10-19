import React from "react";
import arrow from "../../assets/svg/arrow-right-button.svg";
import "./index.css";

function Button({ title }) {
  return (
    <>
      <button className="btn">
        {title}
        <span className="arrow-icon">
          <img src={arrow} alt="row" />
        </span>
      </button>
    </>
  );
}

export default Button;
