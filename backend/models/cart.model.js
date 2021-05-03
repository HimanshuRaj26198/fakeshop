const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  customerDetail: {
    type: [Object],
  },

  customerOrder: {
    type: [Object],
  },
});

module.exports = mongoose.model("cart", cartSchema);
