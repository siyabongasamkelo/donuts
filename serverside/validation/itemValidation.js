const yup = require("yup");

const itemSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number("price must be a number").required("price cannot be empty"),
  cart: yup.string().required(),
  quantity: yup.number().required("quantity cannot be empty"),
  description: yup.string().required(),
});

module.exports = itemSchema;
