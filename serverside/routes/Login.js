const router = require("express").Router();
// const validation = require("../middleware/ValidationMiddleware");
// const userSchema = require("../validation/userValidation");

const LoginMiddleware = require("../middleware/LoginMiddleware");
const loginValidation = require("../validation/loginValidation");

const AuthControllers = require("../controllers/AuthControllers");

router.post(
  "/user",
  //   validation(userSchema),
  LoginMiddleware(loginValidation),

  AuthControllers.login
);

module.exports = router;
