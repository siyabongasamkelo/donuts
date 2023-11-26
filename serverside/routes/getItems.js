const router = require("express").Router();
const itemControllers = require("../controllers/ItemControllers");

router.get(
  "/items",

  itemControllers.getItems
);

module.exports = router;
