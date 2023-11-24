const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: false,
  },
  description: {
    type: String,
    required: true,
    unique: false,
  },
  price: {
    type: Number,
    required: true,
    unique: false,
  },
  quantity: {
    type: Number,
    required: false,
    unique: false,
  },
  category: {
    type: String,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    requires: true,
  },
});

const Items = mongoose.model("Item", itemSchema);
module.exports = Items;
