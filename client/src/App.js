import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import About from "./About.js";
import Products from "./Products.js";
import ProductDetails from "./ProductDetails.js";
import Cart from "./Cart.js";
const axios = require("axios");

function App({ baseURL }) {
  const homeURL = window.location.href;
  // uncomment the line below, if just want to use MySql DB:
  //const [cart, setCart] = useState([]);

  // coment this block if just want to use MySQL DB:
  // retrieve from localStorge Method:
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );

  // Comment this useEffect Block, if don't want to use MySql DB
  useEffect(() => {
    if (cart.length === 0) {
      axios
        .get(`${baseURL}/cart`)
        .then((res) => {
          console.log(res.data);
          setCart(res.data);
        })
        .catch(() => console.log("ERROR: read cart from database"));

      console.log(cart);
    }
  }, []);

  useEffect(() => {
    if (cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    console.log(cart);
  }, [cart]);

  function handleProductDelete(id) {
    const updated = cart.filter((product) => product.id !== id);

    // Comment this code [axios], if don't want to use MySql DB
    // axios: delete cart via delete -- newProduct.id
    axios
      .delete(`${baseURL}/cart`, { data: { id } })
      .then(() => {
        setCart(updated);
      })
      .catch(() => console.log("ERROR: delete item in datbase"));

    // uncomment the line below, if don't want to use MySql DB:
    // setCart(updated);
  }

  function handleProductAdd(newProduct) {
    if (!existInCart(newProduct.id)) {
      newProduct.quantity = 1;

      // Comment this code, if don't want to use MySql DB
      // axios: add cart via put -- newProduct
      axios
        .post(`${baseURL}/cart`, newProduct)
        .then(() => {
          setCart((prev) => [...prev, newProduct]);
        })
        .catch(() => console.log("ERROR: add item to datbase"));

      // uncomment the line below, if don't want to use MySql DB:
      // setCart((prev) => [...prev, newProduct]);
    } else {
      const updated = cart.map((product) => {
        if (product.id === newProduct.id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });

      // Comment this code, if don't want to use MySql DB
      // axios: update cart via patch -- newProduct.id
      axios
        .patch(`${baseURL}/cart`, { id: newProduct.id })
        .then(() => {
          setCart(updated);
        })
        .catch(() => console.log("ERROR: update item in datbase"));

      // uncomment the line below, if don't want to use MySql DB:
      // setCart(updated);
    }
  }

  function existInCart(id) {
    for (const product of cart) {
      if (id === product.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <BrowserRouter>
      <Navbar cart={cart} />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/products">
            <Products
              cart={cart}
              onProductAdd={handleProductAdd}
              onProductDelete={handleProductDelete}
            />
          </Route>
          <Route path="/products/:id">
            <ProductDetails onProductAdd={handleProductAdd} />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} homeURL={homeURL} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
