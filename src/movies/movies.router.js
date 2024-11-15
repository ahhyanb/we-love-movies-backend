const controller = require("./movies.controller");
const express = require("express");
const router = express.Router();

router.route("/")
    .get(controller.list);

module.exports = router;
