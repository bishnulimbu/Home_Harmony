const express = require("express");
const router = express.Router();
const { newCollection } = require("../controller/newCollection_controller.js");

router.get("/newcollection", newCollection);
module.exports = router;
