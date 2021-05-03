const Cart = require("../models/cart.model");

const addToCart = async (req, res, next) => {
  let newItem = new Cart({
    customerDetail: req.body.customerDetail,
    customerOrder: req.body.customerOrder,
  });

  try {
    newItem.save();
    res.send(newItem);
    console.log(newItem);
  } catch {
    console.log("Error adding item to cart");
  }
};

const getCartItem = async (req, res, next) => {
  try {
    const response = await Cart.find();
    res.send(response);
  } catch {
    console.log("Error getting cart item");
  }
};

module.exports = { addToCart, getCartItem };
