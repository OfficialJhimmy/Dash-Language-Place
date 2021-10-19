import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../components/Button/Button";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../../features/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch, cart]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-container">
      <h2 className="heading-primary">Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/our-courses">
              <Button title="Our Courses" />
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems?.map((cartItem) => (
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-product">
                  <ReactCountryFlag
                    countryCode={cartItem.countrycode}
                    svg
                    style={{
                      width: "4em",
                      height: "4em",
                    }}
                    title={cartItem.countrycode}
                    className="cart-flag"
                  />
                  <div>
                    <h3>{cartItem.title}</h3>
                    <p>{cartItem.about}</p>
                    <button onClick={() => handleRemoveFromCart(cartItem)}>
                      Remove
                    </button>
                  </div>
                </div>

                <div className="cart-product-price">
                  &#x20A6; {cartItem.price}
                </div>
                <div className="cart-product-quantity">
                  <button onClick={() => handleDecreaseCart(cartItem)}>
                    -
                  </button>
                  <div className="count">{cartItem.cartQuantity}</div>
                  <button onClick={() => handleIncreaseCart(cartItem)}>
                    +
                  </button>
                </div>
                <div className="cart-product-total-price">
                  &#x20A6; {cartItem.price * cartItem.cartQuantity}
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button className="clear-btn" onClick={() => handleClearCart()}>
              Empty Cart
            </button>
            <div className="cart-checkout">
              <div className="cart-subtotal">
                <span>Subtotal</span>
                <span className="amount">&#x20A6; {cart.cartTotalAmount}</span>
              </div>
              <button className="checkout-button">Check Out</button>
              <div className="continue-shopping">
                <Link to="/our-courses">
                  <Button title="Continue shopping" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
