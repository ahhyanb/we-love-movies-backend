const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
    const { is_showing } = req.query;
    const data = is_showing === "true" ? await service.listShowing() : await service.list();
    res.json({ data });
}

async function listByMovieId(req, res, next) {
    const { movieId } = req.params;
    const data = await service.listByMovieId(movieId);
    res.json({ data });
}

async function validateMovieId(req, res, next) {
    const { movieId } = req.params;
    const movie = await service.listByMovieId(movieId)
    if (movie) {
        res.locals.movie = movie;
        return next()
    } 
    next({ status: 404, message: "Movie cannot be found" });
}


async function listTheaters(req, res, next) {
    const { movieId } = req.params;
    const data = await service.listTheatersByMovieId(movieId);
    res.json({ data: data || [] }); // Ensure data is always an array
  }

  async function listReviews(req, res, next) {
    const { movieId } = req.params;
    const data = await service.listReviewsByMovieId(movieId);
    res.json({ data: data || [] }); // Ensure data is always an array
  }
  

module.exports = {  
    list: asyncErrorBoundary(list),
    listByMovieId: [asyncErrorBoundary(validateMovieId), asyncErrorBoundary(listByMovieId)],
    listTheaters: [asyncErrorBoundary(validateMovieId), asyncErrorBoundary(listTheaters)],
    listReviews: [asyncErrorBoundary(validateMovieId), asyncErrorBoundary(listReviews)],
    
}