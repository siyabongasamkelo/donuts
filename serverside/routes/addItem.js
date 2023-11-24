const router = require("express").Router();
const validation = require("../middleware/ValidationMiddleware");
const itemSchema = require("../validation/itemValidation");
const fileValidator = require("../middleware/fileValidation");

const itemControllers = require("../controllers/ItemControllers");
router.post(
  "/item",
  validation(itemSchema),
  fileValidator,

  itemControllers.addItem
);

module.exports = router;
