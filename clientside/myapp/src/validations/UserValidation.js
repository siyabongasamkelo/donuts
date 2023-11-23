import * as yup from "yup";

export const userSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email("email not valid").required(),
  password: yup.string().min(3).max(8).required(),
  conPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "passwords must match")
    .required("confirm your password"),
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

export const LoginSchema = yup.object().shape({
  email: yup.string().email("email not valid").required(),
  password: yup.string().min(3).max(8).required(),
});
