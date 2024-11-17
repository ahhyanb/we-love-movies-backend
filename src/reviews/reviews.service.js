const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

// Configuration for mapProperties to nest critic information
// const addCritic = mapProperties({
//     critic_id: "critic.critic_id",
//     preferred_name: "critic.preferred_name",
//     surname: "critic.surname",
//     organization_name: "critic.organization_name",
// });

// List reviews
function list() {
    return knex("reviews").select("*");
}

// Deletes review
function destroy(reviewId) {
    return knex("reviews")
        .where({ review_id: reviewId })
        .del();
}

// Find the review
function read(reviewId) {
    return knex("reviews")
        .select("*")
        .where({ review_id: reviewId })
        .first();
}

function readWithCritic(reviewId) {
    return knex("reviews as r")
        .join("critics as c", "r.critic_id", "c.critic_id")
        .select(
            "r.review_id",
            "r.content",
            "r.score",
            "r.created_at",
            "r.updated_at",
            "r.critic_id",
            "r.movie_id",
            "c.critic_id",
            "c.preferred_name",
            "c.surname",
            "c.organization_name",
            "c.created_at as critic_created_at",
            "c.updated_at as critic_updated_at"
        )
        .where({ "r.review_id": reviewId })
        .first()
        .then((review) => {
            if (!review) return null;

            // Manually nest the critic information
            return {
                ...review,
                critic: {
                    critic_id: review.critic_id,
                    preferred_name: review.preferred_name,
                    surname: review.surname,
                    organization_name: review.organization_name,
                    created_at: review.critic_created_at,
                    updated_at: review.critic_updated_at
                }
            };
        });
}


// Updates review
function update(updatedReview) {
    return knex("reviews")
        .where({ review_id: updatedReview.review_id })
        .update(updatedReview);
}


// Exports
module.exports = {
    list,
    destroy,
    update,
    readWithCritic,
    read,
};
