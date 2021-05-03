const Products = require("../models/product.model");

const getProducts = async (req, res, next) => {
  try {
    const response = await Products.find();
    res.send(response);
  } catch {
    console.log("Error");
  }
};

const addProducts = async (req, res, next) => {
  let newProduct = new Products({
    title: req.body.title,
    price: req.body.price,
    description: req.body.price,
    categore: req.body.category,
    image: req.body.image,
  });

  try {
    await newProduct.save();
    res.send(newProduct);
  } catch {
    console.log("Error adding product");
  }
};

module.exports = { getProducts, addProducts };
