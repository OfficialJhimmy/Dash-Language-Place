import React from "react";
import "./index.css";

function Line() {
  return (
    <div>
      <span className="link" href="#">
        <span className="link__arrow">
          <span></span>
          <span></span>
        </span>
        <span className="link__line"></span>
        <span className="link__text">Hello! Hallo! Bonjour!</span>
      </span>
    </div>
  );
}

export default Line;
