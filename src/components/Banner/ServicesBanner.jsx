import React from "react";
import { FaTools } from "react-icons/fa";
import "./index.css";

function ServicesBanner() {
  return (
    <div className="services__container">
      <div className="services__wrapper">
        <div className="services__heading">
          <h1>
            Hi there👋, get to learn more about <br />
            the amazing Services we're currently offering.
          </h1>
        </div>
        <div className="services__icon">
          <FaTools className="icon__tools" />
        </div>
      </div>
    </div>
  );
}

export default ServicesBanner;
