const productCtrl = require("../controller/products.controller");
const express = require("express");
const router = express.Router();

router.get("/", productCtrl.getProducts);
router.post("/add", productCtrl.addProducts);

module.exports = { router: router };
