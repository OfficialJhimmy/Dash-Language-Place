import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { ImUserCheck } from "react-icons/im";
import { GiChart } from "react-icons/gi";
import { FcGraduationCap } from "react-icons/fc";
import { GiBookshelf } from "react-icons/gi";
import "./index.css";

function Grid4x4() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="parent">
        <div data-aos="fade-up" className="parent__children">
          <div>
            <div className="grid__icon-wrapper grid-a">
              <ImUserCheck className="grid__icon" />
            </div>
          </div>

          <h3 className="heading-secondary">Qualified Tutors</h3>
          <p>
            At DASH, you will learn from the best tutors and be motivated to
            explore customs from around the world.
          </p>
        </div>

        <div data-aos="fade-up" className="parent__children">
          <div>
            <div className="grid__icon-wrapper grid-b">
              <GiChart className="grid__icon" />
            </div>
          </div>

          <h3 className="heading-secondary">Monthly Progress</h3>
          <p>
            We carry out your appraisal performances to examine your monthly
            improvement in the language.
          </p>
        </div>

        <div data-aos="fade-up" className="parent__children">
          <div>
            <div className="grid__icon-wrapper grid-c">
              <GiBookshelf className="grid__icon" />
            </div>
          </div>
          <h3 className="heading-secondary">Trusted Courses</h3>
          <p>
            Our Courses are affordable, comprehensive and trusted. With the sole
            aim of giving you the best learning experience.
          </p>
        </div>

        <div data-aos="fade-up" className="parent__children">
          <div>
            <div className="grid__icon-wrapper grid-d">
              <FcGraduationCap className="grid__icon" />
            </div>
          </div>
          <h3 className="heading-secondary">Personalized Learning</h3>
          <p>
            At DASH, we have a modified learning plan on how to help you learn
            effectively and faster than you think
          </p>
        </div>
      </div>
    </>
  );
}

export default Grid4x4;
