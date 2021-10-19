import React from "react";
import "./index.css";

function ServicesBanner({ heading, image }) {
  return (
    <div className="services__container">
      <div className="services__wrapper">
        <div className="services__heading">
          <h1>{heading}</h1>
        </div>
        <div className="services__icon">
          <img
            src={image}
            alt="DASH LANGUAGE SCHOOL"
            className="services__img"
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesBanner;
