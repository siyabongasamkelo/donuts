import * as yup from "yup";

export const productSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number("price must be a number").required("price cannot be empty"),
  cart: yup.string().required(),
  quantity: yup.number.required("quantity cannot be empty"),
  image: yup
    .mixed()
    .required("image required")
    .test(
      "FILE_TYPE",
      "Invalid file type",
      (value) =>
        value && ["image/png", "image/jpeg", "image/jpg"].includes(value.type)
    ),
});
