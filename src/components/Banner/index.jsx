import React from "react";
import "./index.css";
import BannerContainer from "./bannerContainer";
import Learn from "./learn";

function Banner() {
  return (
    <>
      <div className="banner__wrapper">
        <BannerContainer />
        <Learn />
      </div>
    </>
  );
}

export default Banner;
