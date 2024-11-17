// src/theaters/theaters.router.js
const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./theaters.controller");

router.route("/")
    .get(controller.list)
    .all(methodNotAllowed);

module.exports = router;
