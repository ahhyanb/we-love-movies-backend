const knex = require("../db/connection");

function list() {
    return knex("theaters").select("*");
}

module.exports = {
    list,
};