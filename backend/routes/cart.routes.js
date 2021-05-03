const express = require("express");
const router = express.Router();
const cartCtrl = require("../controller/cart.controller");

router.get("/", cartCtrl.getCartItem);
router.post("/add", cartCtrl.addToCart);

module.exports = { router: router };
