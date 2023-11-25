const router = require("express").Router();
const LoginMiddleware = require("../middleware/LoginMiddleware");
const loginValidation = require("../validation/loginValidation");

const AuthControllers = require("../controllers/AuthControllers");

router.post(
  "/user",
  LoginMiddleware(loginValidation),

  AuthControllers.login
);

module.exports = router;
