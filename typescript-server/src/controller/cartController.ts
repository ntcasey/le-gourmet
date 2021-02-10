import { Request, Response } from "express";
import * as model from "../models/cartModel";

const getCart = (req: Request, res: Response) => {
  model.getCartModel((err, data) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  });
};

const addCart = (req: Request, res: Response) => {
  const product = req.body;
  model.addCartItemModel(product, (err) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  });
};

const updateCart = (req: Request, res: Response) => {
  const productID = req.body.id;

  model.updateCartItemModel(productID, (err) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  });
};

const deleteCart = (req: Request, res: Response) => {
  const productID = req.body.id;

  model.deleteCartItemModel(productID, (err) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  });
};

export { getCart, addCart, updateCart, deleteCart };
