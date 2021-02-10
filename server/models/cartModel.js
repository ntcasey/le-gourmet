const db = require("../database/db.js");

const getCartModel = (callback) => {
  const queryStr = "select * from cart";

  db.query(queryStr)
    .then((data) => callback(null, data))
    .catch((err) => callback(err));
};

const addCartItemModel = (product, callback) => {
  const { description, id, image, name, price, price_id, quantity } = product;
  const property = "description, id, image, name, price, price_id, quantity";
  const queryStr = `insert into cart (${property}) values ('${description}', ${id}, '${image}', '${name}', ${price}, '${price_id}', ${quantity})`;

  db.query(queryStr)
    .then(() => callback(null))
    .catch((err) => callback(err));
};

const updateCartItemModel = (id, callback) => {
  const queryStr = `update cart set quantity=quantity+1 where id=${id}`;

  db.query(queryStr)
    .then(() => callback(null))
    .catch((err) => callback(err));
};

const deleteCartItemModel = (id, callback) => {
  const queryStr = `delete from cart where id=${id}`;

  db.query(queryStr)
    .then(() => callback(null))
    .catch((err) => callback(err));
};

module.exports = {
  getCartModel,
  addCartItemModel,
  updateCartItemModel,
  deleteCartItemModel,
};
