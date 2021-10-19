import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Button from "../Button/Button";
import HomeCard from "./HomeCard";

function Index() {
  return (
    <div className="cards">
      <h2 className="heading-primary">Do we have your attention yet?</h2>
      <p>
        Browse through our available and comprehensive courses to get started
        today. What are you waiting for? Stand Out Now and Enroll for our
        Courses.
      </p>
      <div className="card__container">
        <HomeCard />
      </div>
      <div data-aos="zoom-in" className="btn-card">
        <Link to="/our-courses">
          <Button title="View All Courses" />
        </Link>
      </div>
    </div>
  );
}

export default Index;
