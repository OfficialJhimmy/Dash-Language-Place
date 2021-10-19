import React from "react";
import "./index.css";

function ServicesInfo({ heading, servicesabout }) {
  return (
    <>
      <div className="services__info-container">
        <h2 className="heading-primary">{heading}</h2>
        <p>{servicesabout}</p>
      </div>
    </>
  );
}

export default ServicesInfo;
