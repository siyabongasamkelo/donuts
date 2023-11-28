const yup = require("yup");

const reviewSchema = yup.object({
  writerId: yup.string().required(),
  productId: yup.string().required(),
  review: yup.string().required(),
  rating: yup.number().required(),
});

module.exports = reviewSchema;
