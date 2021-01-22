import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import About from "./About.js";
import Products from "./Products.js";
import ProductDetails from "./ProductDetails.js";
import Cart from "./Cart.js";

function App() {
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    if (cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  function handleProductDelete(id) {
    const updated = cart.filter((product) => product.id !== id);
    setCart(updated);
  }

  function handleProductAdd(newProduct) {
    if (!existInCart(newProduct.id)) {
      newProduct.quantity = 1;
      setCart((prev) => [...prev, newProduct]);
    } else {
      const updated = cart.map((product) => {
        if (product.id === newProduct.id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
      setCart(updated);
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
            <Cart cart={cart} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
