if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

// routers
const moviesRouter = require("./movies/movies.router");
const theatersRouter = require("./theaters/theaters.router");
const reviewsRouter = require("./reviews/reviews.router");

// error handlers
const generalErrorHandler = require("./errors/generalErrorHandler");

app.use(cors());
app.use(express.json());

// routes
app.use("/movies", moviesRouter);
app.use("/theaters", theatersRouter);
app.use("/reviews", reviewsRouter);

//error handler
app.use(generalErrorHandler);

module.exports = app;
