const Reviews = require("../model/Reviews");

function isEmpty(val) {
  return val === undefined || val == null || val.length <= 0 ? true : false;
}

module.exports.addRiview = async (req, res) => {
  const { writerId, productId, review, rating, storeId } = req.body;
  try {
    const newReview = new Reviews({
      writerId: writerId,
      productId: productId,
      storeID: storeId,
      review: review,
      rating: rating,
    });
    await Reviews.create(newReview).then(() => {
      res.status(200).json("review added");
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ messgae: "error occured while adding your review" });
    alliswell = false;
  }
};

module.exports.getReview = async (req, res) => {
  const id = req.params.id;

  if (isEmpty(id)) {
    res.status(400).json("please provide product Id");
  } else {
    try {
      const reviews = await Reviews.where("productId")
        .equals(id)
        .populate("writerId")
        .populate("productId");
      res.status(200).json(reviews);
    } catch (err) {
      console.log(err);
      res
        .status(400)
        .json({ messgae: "error occured while adding your review" });
      alliswell = false;
    }
  }
};
