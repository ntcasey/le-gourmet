const model = require("../models/cartModel.js");

const getCart = (req, res) => {
  model.getCartModel((err, data) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  });
};

const addCart = (req, res) => {
  const product = req.body;
  model.addCartItemModel(product, (err) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  });
};

const updateCart = (req, res) => {
  const productID = req.body.id;

  model.updateCartItemModel(productID, (err) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  });
};

const deleteCart = (req, res) => {
  const productID = req.body.id;

  model.deleteCartItemModel(productID, (err) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  });
};

module.exports = {
  getCart,
  addCart,
  updateCart,
  deleteCart,
};
