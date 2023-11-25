const router = require("express").Router();
const itemControllers = require("../controllers/ItemControllers");

router.get(
  "/item",

  itemControllers.getItems
);

module.exports = router;
