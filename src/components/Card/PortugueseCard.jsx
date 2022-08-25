import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import ReactCountryFlag from "react-country-flag";

import { FcClock } from "react-icons/fc";
import { GrCart } from "react-icons/gr";

import { PortugueseData } from "../../data/ProductData/PortugueseData";
import "./index.css";
import { addToCart } from "../../features/cartSlice";

function PortugueseCard() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    history.push("/cart");
  };
  return (
    <>
      {PortugueseData?.map((product) => (
        <div className="card__wrapper" key={product.id}>
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

export default PortugueseCard;
