import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import ReactCountryFlag from "react-country-flag";

import { FcClock } from "react-icons/fc";
import { GrCart } from "react-icons/gr";

import { GermanData } from "../../data/ProductData/GermanData";
import "./index.css";
import { addToCart } from "../../features/cartSlice";

function GermanCard() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    history.push("/cart");
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      {GermanData?.map((product) => (
        <div data-aos="fade-right" className="card__wrapper" key={product.id}>
          <div className="card__top">
            <div className="card__top-details">
              <div className="flag-content">
                <div className="card__flag">
                  <ReactCountryFlag
                    countryCode={product.countrycode}
                    svg
                    style={{
                      width: "4em",
                      height: "4em",
                    }}
                    title={product.countrycode}
                  />
                </div>
                <div className="card__title">
                  <h4>{product.title}</h4>
                </div>
              </div>
              <div className="card__price">&#x20A6;{product.price}</div>
            </div>
            <div className="card__duration">
              <div className="card__icon">
                <FcClock className="icon-clock" />
              </div>
              <p>{product.duration}</p>
            </div>
          </div>

          <div className="card__bottom">
            <div className="card__info">
              <p>{product.about}</p>
            </div>
            <div className="card__cart">
              <button onClick={() => handleAddToCart(product)}>
                <GrCart className="icon-cart" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default GermanCard;
