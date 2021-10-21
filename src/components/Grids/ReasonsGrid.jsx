import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaConnectdevelop } from "react-icons/fa";
import { BiHappyAlt } from "react-icons/bi";
import { GiChart } from "react-icons/gi";
import { GiGiftOfKnowledge } from "react-icons/gi";
import ReasonsImage from "../../assets/images/Reasons-image.jpg";
import "./index.css";

function ReasonsGrid() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="reasons__container">
        <h2 className="heading-primary">
          Why you should LEARN a Foreign Language
        </h2>
        <p>
          These are some of the reasons why over 100+ Learners joined us to
          learn a new Language.
        </p>

        <div className="reasons__wrapper">
          <div className="reasons-why">
            <div data-aos="fade-left" className="reasons-why__container">
              <div className="reasons-icon__wrapper">
                <FaConnectdevelop className="reasons__icon" />
              </div>
              <div className="reasons-why__content">
                <h3>Connect</h3>
                <p>
                  It helps you to engage and associate with different people
                  from all over the world.
                </p>
              </div>
            </div>

            <div data-aos="fade-right" className="reasons-why__container">
              <div className="reasons-icon__wrapper">
                <BiHappyAlt className="reasons__icon" />
              </div>
              <div className="reasons-why__content">
                <h3>Upswing your Career</h3>
                <p>
                  It sets you aside from your monolingual colleagues and makes
                  you exceptional.
                </p>
              </div>
            </div>

            <div data-aos="fade-left" className="reasons-why__container">
              <div className="reasons-icon__wrapper">
                <GiChart className="reasons__icon" />
              </div>
              <div className="reasons-why__content">
                <h3>Boost your Confidence</h3>
                <p>
                  It bestows you with the confidence to relate with people from
                  different cultural backgrounds.
                </p>
              </div>
            </div>

            <div data-aos="fade-right" className="reasons-why__container">
              <div className="reasons-icon__wrapper">
                <GiGiftOfKnowledge className="reasons__icon" />
              </div>
              <div className="reasons-why__content">
                <h3>Become a Polygot</h3>
                <p>
                  It improves your communication skills and also helps to
                  develop your mind.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" className="reasons-image">
            <img
              src={ReasonsImage}
              alt="Why Learn with us"
              className="reasons-img"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ReasonsGrid;
