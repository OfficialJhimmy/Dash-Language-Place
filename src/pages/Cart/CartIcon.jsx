import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsFillBagFill } from "react-icons/bs";
import "./index.css";

function CartIcon() {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <>
      <div className="cart-icon__container">
        <Link to="/cart">
          <BsFillBagFill className="cart-icon" />
          <span className="bag-quantity">
            <span>{cartTotalQuantity}</span>
          </span>
        </Link>
      </div>
    </>
  );
}

export default CartIcon;
