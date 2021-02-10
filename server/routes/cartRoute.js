const express = require("express");
const controller = require("../controller/cartController.js");

const router = express.Router();

router
  .route("/")
  .get(controller.getCart)
  .post(controller.addCart)
  .patch(controller.updateCart)
  .delete(controller.deleteCart);

module.exports = router;
