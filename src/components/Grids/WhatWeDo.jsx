import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { Link } from "react-router-dom";
import Job from "../../assets/images/Resume review.png";
import Language from "../../assets/images/English course.png";
import Graduation from "../../assets/images/Graduation (Male Version).png";
import Classroom from "../../assets/images/Classroom.png";
import Recruit from "../../assets/images/Recruitment.png";
import Button from "../Button/Button";
import "./WhatWeDo.css";

function WhatWeDo() {
  return (
    <div className="whatwedo">
      <h2 className="heading-primary">
        What do We do?{" "}
        <span>
          <HiOutlineLightBulb className="whatwedo__icon" />
        </span>
      </h2>
      <p>
        We teach and prepare our students for GERMAN (GOETHE ZERTIFIKAT) AND
        FRENCH (DELF-DALF) International examinations from A1 to C1. We also
        translate and transcribe your videos, Audios and documents from German
        to English, French to English and your target language. Our other
        services are admission processing to international universities, work
        and training visa applications, and family reunion Visa applications.
      </p>
      <div className="whatwedo__parent">
        <div className="whatwedo-wrapper">
          <Link to="/translation-of-documents">
            <div className="whatwedo__image-wrapper">
              <img
                src={Job}
                alt="Dash Language Place"
                className="whatwedo__img"
              />
            </div>
            <h4>Translation and Transcription of documents </h4>
            <p className="whatwedo-p">
              Our translation and transcription services are what makes us stand
              out. Check-in with us today if you need this service.
            </p>
          </Link>
        </div>
        <div className="whatwedo-wrapper">
          <Link to="/our-courses">
            <div className="whatwedo__image-wrapper">
              <img
                src={Language}
                alt="Dash Language Place"
                className="whatwedo__img"
              />
            </div>
            <h4>Language Courses</h4>
            <p className="whatwedo-p">
              We offer German and French language courses At each level. From A1
              to C1. You will learn at your own pace for both online and
              physical classes.
            </p>
          </Link>
        </div>
        <div className="whatwedo-wrapper">
          <Link to="/admission">
            <div className="whatwedo__image-wrapper">
              <img
                src={Graduation}
                alt="Dash Language Place"
                className="whatwedo__img"
              />
            </div>
            <h4>International Admission</h4>
            <p className="whatwedo-p">
              Do you intend to apply for Bachelor's degree, masters, doctorate
              or a language course in German and French-speaking countries. Not
              to worry we've got you covered
            </p>
          </Link>
        </div>
        <div className="whatwedo-wrapper">
          <Link to="/exam-preparation">
            <div className="whatwedo__image-wrapper">
              <img
                src={Classroom}
                alt="Dash Language Place"
                className="whatwedo__img"
              />
            </div>
            <h4>Language Exam Preparation</h4>
            <p className="whatwedo-p">
              We prepare and guide our students at various International GOETHE
              ZERTIFIKAT AND DELF-DALF examinations on each level. Your success
              is very important to us.
            </p>
          </Link>
        </div>
        <div className="whatwedo-wrapper">
          <Link to="/workandtraining">
            <div className="whatwedo__image-wrapper">
              <img
                src={Recruit}
                alt="Dash Language Place"
                className="whatwedo__img"
              />
            </div>
            <h4>Work and Training</h4>
            <p className="whatwedo-p">
              Do you intend on migrating to a German speaking country, DASH's
              got you covered. With our expertise on this subject matter, we
              make the whole process swift and convenient.
            </p>
          </Link>
        </div>
      </div>
      <div data-aos="zoom-in" className="u-align-center">
        <Link to="/our-services">
          <Button title="our services" />
        </Link>
      </div>
    </div>
  );
}

export default WhatWeDo;
