import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PaystackButton } from "react-paystack";
import { getTotals } from "../../features/cartSlice";
import "./Checkout.css";
import { useHistory } from "react-router";

function Checkout() {
  const history = useHistory();
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch, cart]);

  const publicKey = "pk_live_5c748fe85a7b53ad502a2c19f73bfefe3fc9488f";
  const amount = cart.cartTotalAmount * 100; // Remember, set in kobo!
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [option, setOption] = useState("");

  const componentProps = {
    email,
    amount,
    name,
    phone,
    option,
    metadata: {
      name,
      phone,
      option,
      email,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => history.push("/"),

    onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <section>
      <div className="checkout">
        <div className="checkout__container">
          <div className="checkout__heading">
            <h2 className="heading-primary">Checkout Form</h2>
            <h3 classname="checkout__totalamount">
              Total amount to pay: {""} &#x20A6; {cart.cartTotalAmount}
            </h3>
          </div>
          <div className="checkout-form">
            <form>
              <div>
                <span>Name</span>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="checkout__input"
                  required
                />

                <span>Email</span>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="checkout__input"
                  required
                />

                <span>Phone Number</span>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="checkout__input"
                  required
                />

                <span>Preferred method of learning</span>

                <select
                  id="learning"
                  className="checkout__input"
                  value={option}
                  onChange={(e) => setOption(e.target.value)}
                  required
                >
                  <option value="online">Online</option>
                  <option value="physical">Physical</option>
                </select>
              </div>
            </form>
            <PaystackButton {...componentProps} className="paystack-button" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
