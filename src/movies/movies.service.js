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

function read(movieId) {
    return knex("movies as m")
        .select("*")
        .where({"m.movie_id": movieId})
        .first();
}

module.exports = { 
    list,
    listShowing,
    read,

}