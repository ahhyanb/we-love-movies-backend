if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();
const moviesRouter = require("./movies/movies.router");

// error handler
const generalErrorHandler = require("./errors/generalErrorHandler");

// routes
app.use("/movies", moviesRouter);


app.use(generalErrorHandler);

module.exports = app;
