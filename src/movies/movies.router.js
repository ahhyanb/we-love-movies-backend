const controller = require("./movies.controller");
const express = require("express");
const router = express.Router();

// error handlers
const methodNotAllowed = require("../errors/methodNotAllowed"); 

router.route("/")
    .get(controller.list);

router.route("/:movieId")
    .get(controller.read);


 
module.exports = router;
