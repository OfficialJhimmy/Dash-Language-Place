import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { BsPencilSquare } from "react-icons/bs";
import { RiUserVoiceFill } from "react-icons/ri";
import { GiBookPile } from "react-icons/gi";
import { BiWinkSmile } from "react-icons/bi";
import Ivana from "../../assets/images/ivana-image-rework.png";
import "./index.css";

function Grid2x2() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="grid__container p-top">
        <div
          data-aos="fade-left"
          className="grid__container__column grid-right"
        >
          <div className="grid__container__content">
            <div className="home__title">
              <h2 className="heading-primary">What you'd Learn</h2>
              <p>
                Learning a Foreign language with DASH will not only give you
                more chances of getting a good job in your chosen career but
                also give you more knowledge about other cultures and the world
                at large.
              </p>
            </div>

            <div className="p-top-2">
              <div className="grid__learn-content">
                <h3>Dash Language School helps people achieve their goals</h3>
              </div>

              <div className="grid__img-container">
                <img src={Ivana} alt="Ivana" className="grid__img" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid__container__column">
          <div className="grid__container__content grid__child">
            <div data-aos="zoom-in" className="grid__wrapper">
              <div>
                <div className="grid-a small-border-radius">
                  <BsPencilSquare className="small-grid__icon" />
                </div>
              </div>

              <h3 className="heading-secondary">Write</h3>
              <p>
                With us, you will learn how to write effectively and correctly
                in your preferred choice of language.
              </p>
            </div>
            <div data-aos="zoom-in" className="grid__wrapper">
              <div>
                <div className="grid-b small-border-radius">
                  <RiUserVoiceFill className="small-grid__icon" />
                </div>
              </div>

              <h3 className="heading-secondary">Speak</h3>
              <p>
                You will learn how to speak fluently in your preferred choice of
                language.
              </p>
            </div>
            <div data-aos="zoom-in" className="grid__wrapper">
              <div>
                <div className="grid-c small-border-radius">
                  <GiBookPile className="small-grid__icon" />
                </div>
              </div>

              <h3 className="heading-secondary">Read</h3>
              <p>
                You will learn to read comprehensive in your preferred choice of
                language.
              </p>
            </div>
            <div data-aos="zoom-in" className="grid__wrapper">
              <div>
                <div className="grid-d small-border-radius">
                  <BiWinkSmile className="small-grid__icon" />
                </div>
              </div>

              <h3 className="heading-secondary">Understand</h3>
              <p>
                You will learn to understand through listening to native
                speakers of your preferred choice of language.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Grid2x2;
