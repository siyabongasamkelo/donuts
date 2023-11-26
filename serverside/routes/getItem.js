const router = require("express").Router();
const itemControllers = require("../controllers/ItemControllers");

router.get("/item/:id", itemControllers.getItem);

module.exports = router;
