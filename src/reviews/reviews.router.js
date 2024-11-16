const express = require("express");
const router = express.Router();

const controller = require("./reviews.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/")
    .get(controller.list)
    .all(methodNotAllowed);

router.route("/:reviewId")
    .delete(controller.delete)
    .all(methodNotAllowed);

module.exports = router;