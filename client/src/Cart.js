import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Input from "./Input.js";
import Button from "./Button.js";

const Stripe = "";

// TODO: Replace with your own publishable key
const stripeLoadedPromise = loadStripe(Stripe);

// 4242424242424242
export default function Cart({ cart, homeURL }) {
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const [email, setEmail] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();

    // const foodMap = {
    //   Cheese: "price_1IATouGOxnlASb7xxl6DVLh3",
    //   Tomato: "price_1IATyxGOxnlASb7xVoaKbuJt",
    //   Milk: "price_1IATqmGOxnlASb7xMVEOt6Ay",
    //   Pineapple: "price_1IAU0DGOxnlASb7xZo8YdZgq",
    // };

    const lineItems = cart.map((product) => {
      //let id = foodMap[product.name];
      //return { price: id, quantity: product.quantity };
      return { price: product.price_id, quantity: product.quantity };
    });

    stripeLoadedPromise.then((stripe) => {
      stripe
        .redirectToCheckout({
          lineItems: lineItems,
          mode: "payment",
          successUrl: homeURL,
          cancelUrl: homeURL,
          customerEmail: email,
        })
        .then((response) => {
          // redirect if doesn't work
          console.log(response.error);
        })
        .catch((error) => {
          // api key doesnt work
          console.log(error);
        });
    });
  }

  return (
    <div className="cart-layout">
      <div>
        <h1>Your Cart</h1>
        {cart.length === 0 && (
          <p>You have not added any product to your cart yet.</p>
        )}
        {cart.length > 0 && (
          <>
            <table className="table table-cart">
              <thead>
                <tr>
                  <th width="25%" className="th-product">
                    Product
                  </th>
                  <th width="20%">Unit price</th>
                  <th width="10%">Quanity</th>
                  <th width="25%">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>
                        <img
                          src={product.image}
                          width="30"
                          height="30"
                          alt=""
                        />{" "}
                        {product.name}
                      </td>
                      <td>${product.price}</td>
                      <td>{product.quantity}</td>
                      <td>
                        <strong>${product.price * product.quantity}</strong>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan="2"></th>
                  <th className="cart-highlight">Total</th>
                  <th className="cart-highlight">${totalPrice}</th>
                </tr>
              </tfoot>
            </table>
            <form className="pay-form" onSubmit={handleFormSubmit}>
              <p>
                Enter your email and then click on pay and your products will be
                delivered to you on the same day!
                <br />
              </p>
              <Input
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                type="email"
                required
              />
              <Button type="submit">Pay</Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
