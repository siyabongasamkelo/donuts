const router = require("express").Router();

const validation = require("../middleware/ValidationMiddleware");
const reviewSchema = require("../validation/reviewValidation");

const reviewControllers = require("../controllers/reviewControllers");

router.post(
  "/review",
  validation(reviewSchema),

  reviewControllers.addRiview
);

module.exports = router;
