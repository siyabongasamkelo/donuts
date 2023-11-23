const router = require("express").Router();

const validation = require("../middleware/ValidationMiddleware");
const userSchema = require("../validation/userValidation");
const fileValidator = require("../middleware/fileValidation");

const AuthControllers = require("../controllers/AuthControllers");

router.post(
  "/user",
  validation(userSchema),
  fileValidator,

  AuthControllers.register
);

module.exports = router;
