const service = require("./reviews.service");
const asyncErrorBoundary = require("..//errors/asyncErrorBoundary");

async function reviewIdExists(req, res, next){
    const { reviewId } = req.params;
    const result = await service.reviewIdExists(reviewId);
    return result
        ? next() 
        : next({ status: 404, error: "Review cannot be found" });
}

async function list(req, res, next){
    const data = await service.list();
    res.json({ data });
}

async function destroy(req, res, next){
    const { reviewId } = req.params;
    await service.destroy(reviewId);
    res.status(204).end();
}

module.exports = { 
    list: asyncErrorBoundary(list),
    delete: [ reviewIdExists, asyncErrorBoundary(destroy) ],
}