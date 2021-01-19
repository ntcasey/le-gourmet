import React, { useState, useEffect } from "react";
import Product from "./Product.js";
import useFetch from "./useFetch.js";
import Loader from "./Loader.js";

export default function Products({ cart, onProductAdd, onProductDelete }) {
  const BASEURL = "casey's firebase DB";
  const [products, setProducts] = useState([]);
  const { get, loading } = useFetch(BASEURL);

  useEffect(() => {
    get("supermarket.json")
      .then((data) => setProducts(data))
      .catch(() => console.log("Could not load products"));
  }, []);

  return (
    <div className="products-layout">
      <h1>Products</h1>
      <p>Take a look at our products</p>
      <div className="products-grid">
        {loading && <Loader />}
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              details={product}
              cart={cart}
              onProductAdd={onProductAdd}
              onProductDelete={onProductDelete}
            />
          );
        })}
      </div>
    </div>
  );
}
