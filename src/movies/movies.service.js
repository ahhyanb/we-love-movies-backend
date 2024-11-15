const knex = require("../db/connection");

function list() {
    return knex.select("*").from("movies");
}

module.exports = { 
    list,

}