const knex = require("../db/connection");

function list() {
    return knex.select("*").from("movies");
}

function listShowing() {
    return knex("movies as m")
        .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
        .select("m.*")
        .where({ "mt.is_showing": true })
        .groupBy("m.movie_id");
}

function listByMovieId(movieId) {
    return knex("movies as m")
        .select("*")
        .where({"m.movie_id": movieId})
        .first();
}

function listTheatersByMovieId(movieId) {
    return knex("theaters")
      .join("movies_theaters", "theaters.theater_id", "movies_theaters.theater_id") // combine movie_theaters and theaters 
      .where({ "movies_theaters.movie_id": movieId })
      .select("theaters.*");
}


function listReviewsByMovieId(movieId) {
  return knex("reviews")
    .join("critics", "reviews.critic_id", "critics.critic_id") // Join with critics table
    .where({ "reviews.movie_id": movieId })
    .select(
      "reviews.*",
      "critics.preferred_name",
      "critics.surname",
      "critics.organization_name",
      "critics.critic_id"
    )
    .then(reviews => {
      // Transform each review to nest the critic information
      return reviews.map(review => {
        return {
          ...review,
          critic: {
            critic_id: review.critic_id,
            preferred_name: review.preferred_name,
            surname: review.surname,
            organization_name: review.organization_name
          }
        };
      });
    });
}


module.exports = { 
    list,
    listShowing,
    listByMovieId,
    listTheatersByMovieId,
    listReviewsByMovieId,
}