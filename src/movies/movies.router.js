const controller = require("./movies.controller");
const express = require("express");
const router = express.Router();

// error handler for methods not allowed
const methodNotAllowed = require("../errors/methodNotAllowed");
const notFound = require("../errors/notFound")

router.route("/")
    .get(controller.list)
    .all(methodNotAllowed);

router.route("/:movieId")
    .get(controller.listByMovieId)
    .all(methodNotAllowed);

router.route("/:movieId/theaters")
    .get(controller.listTheaters)
    .all(methodNotAllowed);

router.route("/:movieId/reviews")
    .get(controller.listReviews)
    .all(methodNotAllowed);

router.route("/:movieId/critics")
    .get(notFound);
 
module.exports = router;
