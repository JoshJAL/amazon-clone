import "./Payment.css";
import { useStateValue } from "../StateProvider";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";

function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [disables, setDisabled] = useState(true);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = (e) => {
    //   Stripe functionality
  };

  const handleChange = (event) => {
    // Listen for changed in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{cart?.length} items</Link>)
        </h1>
        {/* Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        {/* Payment section - review items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                alt={item.alt}
              />
            ))}
          </div>
        </div>
        {/* Payment section - payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe payment processing  */}

            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
