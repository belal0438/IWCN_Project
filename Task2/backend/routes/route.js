const express = require("express");
const router = express.Router();
const controller = require("../controllers/dataControllers");

router.post("/data", controller.postDatafunction);
router.get("/", controller.geteData);
router.delete("/:id", controller.deleteItem);

module.exports = router;
