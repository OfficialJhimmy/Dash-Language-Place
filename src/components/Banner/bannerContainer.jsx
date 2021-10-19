import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../../assets/images/photo1.png";
import Button from "../Button/Button";

function BannerContainer() {
  return (
    <div>
      <div className="banner__content-container">
        <div className="banner__content">
          <h2>
            Learn, Speak and live
            <br />
            a new Language
            <br />
          </h2>
          <p>
            The New Way to Learn is properly with us. Join our community with
            over 1000 students.Browse through our available courses and get
            enrolled TODAY!
          </p>
          <Link to="/our-courses" className="content__links">
            <Button title="Our Courses" className="content__btn" />
          </Link>
        </div>

        <div className="banner__image-wrapper">
          <img
            src={BannerImage}
            alt="of a student smiling"
            className="banner__image"
          />
        </div>
      </div>
    </div>
  );
}

export default BannerContainer;
