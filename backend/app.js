const express = require("express");
const cors = require("cors");
const product = require("./routes/product.routes");
const cart = require("./routes/cart.routes");
require("./db/db");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors("dev"));

app.use("/", product.router);
app.use("/cart", cart.router);

app.listen(3000, (err) => {
  if (!err) {
    console.log("App listening on port 3000");
  } else {
    console.log("Error Listening App");
  }
});
