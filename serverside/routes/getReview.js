const router = require("express").Router();
const reviewControllers = require("../controllers/reviewControllers");

router.get("/review/:id", reviewControllers.getReview);

module.exports = router;
