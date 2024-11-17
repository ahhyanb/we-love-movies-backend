const service = require("./reviews.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function reviewIdExists(req, res, next) {
    const { reviewId } = req.params;
    const review = await service.read(reviewId);
    res.locals.review = review;
    return review
        ? next()
        : next({ status: 404, message: "Review cannot be found" });
}

async function list(req, res, next) {
    const data = await service.list();
    res.json({ data });
}

async function destroy(req, res, next) {
    const { review_id } = res.locals.review;
    await service.destroy(review_id);
    res.status(204).end();
}

async function update(req, res, next) {
    const { reviewId } = req.params;
    const updatedReview = {
        ...res.locals.review,
        ...req.body.data,
        review_id: reviewId,
    };

    // Update the review in the database
    await service.update(updatedReview);

    // Fetch the updated review including critic info for the response
    const data = await service.readWithCritic(reviewId);

    res.json({ data });
}




module.exports = {
    list: asyncErrorBoundary(list),
    delete: [asyncErrorBoundary(reviewIdExists), asyncErrorBoundary(destroy)],
    update: [asyncErrorBoundary(reviewIdExists), asyncErrorBoundary(update)],
};