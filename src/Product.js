import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button.js";

export default function Product(props) {
  const { details, cart, onProductAdd, onProductDelete } = props;

  let quantity = 0;
  for (const product of cart) {
    if (details.id === product.id && product.quantity) {
      quantity = product.quantity;
      break;
    }
  }

  return (
    <div className="product">
      <div className="product-image-container">
        <Link to={`/products/${details.id}`}>
          <img
            src={details.image}
            width="100"
            height="100"
            className="product-image"
            alt={details.name}
          />
        </Link>
        {quantity > 0 && (
          <div className="product-quantity-container">
            <div className="product-quantity">{quantity}</div>
          </div>
        )}
      </div>
      <div className="product-info">
        <h3>{details.name}</h3>
        <p>{details.description}</p>
      </div>
      <div className="product-checkout">
        <div>
          {quantity > 0 && (
            <Button
              outline
              onClick={() => onProductDelete(details.id)}
              className="product-delete"
            >
              x
            </Button>
          )}
        </div>
        <Button outline onClick={() => onProductAdd(details)}>
          ${details.price}
        </Button>
      </div>
    </div>
  );
}
