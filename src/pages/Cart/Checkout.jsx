import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PaystackButton } from "react-paystack";
import { getTotals } from "../../features/cartSlice";
import "./Checkout.css";

function Checkout() {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch, cart]);

  const publicKey = "pk_test_3b4c4f0f2075dd94337f26448dfdd2d70e64fa1a";
  const amount = cart.cartTotalAmount * 100; // Remember, set in kobo!
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [option, setOption] = useState("");

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <div className="checkout">
      <div className="checkout__container">
        <div className="item">
          <h2 className="heading-primary">Checkout Form</h2>
          <p classname="checkout__total">{cart.cartTotalAmount}</p>
        </div>
        <div className="checkout-form">
          <form>
            <label>Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="checkout__input"
            />
            <label>Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="checkout__input"
            />
            <label>Phone</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="checkout__input"
            />
          </form>
          <PaystackButton {...componentProps} />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
