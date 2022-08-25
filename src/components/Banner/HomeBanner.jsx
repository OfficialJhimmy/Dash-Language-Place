import React from "react";
import { Link } from "react-router-dom";
import "./HomeBanner.css";
import BannerVideo from "../../assets/videos/banner-video-2.mp4";
// import BannerVideoWeb from '../../assets/videos/banner-video-web-1.webm'
import Button from "../Button/Button";
import Banner from '../../assets/videos/banner-video-1.mp4'
import Learn from "./learn";

const HomeBanner = () => {
  return (
    <>
      <div className="banner__hero">
        <video autoPlay loop muted className="banner__video">
          <source src={BannerVideo} type="video/mp4" />
          {/* <source src={BannerVideoWeb} type="video/webm" /> */}
          Your browser does not support the Video tag.
        </video>

        <div className="banner__content">
        <h1>
            Learn, Speak and Live
            <br />
            a New Language
            <br />
          </h1>
          <p>
            We are a team of professionals with years of valuable experiences who are capable of solving complex business issues and provide solutions to financial challenges .
          </p>
          
          <Link to="/our-courses" className="content__links">
            <Button title="Our Courses" className="content__btn" />
          </Link>
          <Learn/>
        </div>
       
      </div>
    </>
  );
};

export default HomeBanner;
