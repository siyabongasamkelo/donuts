const mongoose = require("mongoose");
const schema = mongoose.Schema;

const reviewSchema = new schema({
  writerId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    unique: false,
    require: true,
  },
  productId: {
    type: mongoose.SchemaTypes.ObjectId,
    unique: false,
    require: true,
    ref: "Item",
  },
  review: {
    type: String,
    unique: false,
    require: true,
  },
  rating: {
    type: Number,
    unique: false,
    require: true,
  },
});

const Reviews = mongoose.model("Reviews", reviewSchema);
module.exports = Reviews;
