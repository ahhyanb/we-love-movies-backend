const knex = require("../db/connection");

// list reviews
function list() {
    return knex("reviews").select("*")
}

function destroy(reviewId) {
    return knex("reviews") // Select the "reviews" table
        .where({ review_id: reviewId }) // Find rows where "review_id" matches the "reviewId" parameter
        .del(); // Delete the matching rows
}

function reviewIdExists(reviewId) {
    return knex("reviews") // select reviews table
        .where({ review_id: reviewId }) // find rows where " review_id mathces the reviewId"
        .first(); // only returns the first result
}

module.exports = {
    list, 
    destroy,
    reviewIdExists,
}