if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

// routers
const moviesRouter = require("./movies/movies.router");
const theatersRouter = require("./theaters/theaters.router");
const reviewsRouter = require("./reviews/reviews.router");

// error handler
const generalErrorHandler = require("./errors/generalErrorHandler");
const notFound = require("./errors/notFound");

// cors
app.use(cors());

app.use(express.json())
// routes
app.use("/movies", moviesRouter);

app.use("/theaters", theatersRouter);

app.use("/reviews", reviewsRouter);

// handles error
app.use(generalErrorHandler);
app.use(notFound);


module.exports = app;
