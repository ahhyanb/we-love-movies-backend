// src/theaters/theaters.service.js
const knex = require("../db/connection");
const reduceProperties = require("../utils/reduce-properties");

// Configuration for reducing movies into a movies array
const reduceMovies = reduceProperties("theater_id", {
  movie_id: ["movies", null, "movie_id"],
  title: ["movies", null, "title"],
  rating: ["movies", null, "rating"],
  runtime_in_minutes: ["movies", null, "runtime_in_minutes"],
  description: ["movies", null, "description"],
  image_url: ["movies", null, "image_url"],
  is_showing: ["movies", null, "is_showing"]
});

function list() {
  return knex("theaters")
    .join("movies_theaters", "theaters.theater_id", "movies_theaters.theater_id")
    .join("movies", "movies_theaters.movie_id", "movies.movie_id")
    .select(
      "theaters.*",
      "movies.movie_id",
      "movies.title",
      "movies.runtime_in_minutes",
      "movies.rating",
      "movies.description",
      "movies.image_url",
      "movies_theaters.is_showing"
    )
    .then(reduceMovies);
}

module.exports = {
  list,
};
