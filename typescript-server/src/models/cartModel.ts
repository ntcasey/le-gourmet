import db from "../database/db";

const getCartModel = (callback: (err?: Error | null, data?: any) => void) => {
  const queryStr = "select * from cart";

  db.query(queryStr)
    .then((data: any) => callback(null, data))
    .catch((err: Error) => callback(err));
};

const addCartItemModel = (
  product: any,
  callback: (err?: Error | null, data?: any) => void
) => {
  const { description, id, image, name, price, price_id, quantity } = product;
  const property = "description, id, image, name, price, price_id, quantity";
  const queryStr = `insert into cart (${property}) values ('${description}', ${id}, '${image}', '${name}', ${price}, '${price_id}', ${quantity})`;

  db.query(queryStr)
    .then(() => callback(null))
    .catch((err: Error) => callback(err));
};

const updateCartItemModel = (
  id: number,
  callback: (err?: Error | null, data?: any) => void
) => {
  const queryStr = `update cart set quantity=quantity+1 where id=${id}`;

  db.query(queryStr)
    .then(() => callback(null))
    .catch((err: Error) => callback(err));
};

const deleteCartItemModel = (
  id: number,
  callback: (err?: Error | null, data?: any) => void
) => {
  const queryStr = `delete from cart where id=${id}`;

  db.query(queryStr)
    .then(() => callback(null))
    .catch((err: Error) => callback(err));
};

export {
  getCartModel,
  addCartItemModel,
  updateCartItemModel,
  deleteCartItemModel,
};
