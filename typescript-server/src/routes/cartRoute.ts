import express from "express";
import * as controller from "../controller/cartController";
const router = express.Router();

router
  .route("/")
  .get(controller.getCart)
  .post(controller.addCart)
  .patch(controller.updateCart)
  .delete(controller.deleteCart);

export default router;
