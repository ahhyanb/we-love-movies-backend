const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
    const { is_showing } = req.query;
    const data = is_showing === "true" ? await service.listShowing() : await service.list();
    res.json({ data });
}

async function read(req, res, next) {
    const { movieId } = req.params;
    const data = await service.read(movieId);
    res.json({ data });
}

async function validateMovieId(req, res, next) {
    const { movieId } = req.params;
    const movie = await service.read(movieId)
    if (movie) {
        res.locals.movie = movie;
        return next()
    } 
    next({ status: 404, message: "Movie cannot be found" });
}


module.exports = {  
    list: asyncErrorBoundary(list),
    read: [ asyncErrorBoundary(validateMovieId), read ],
    
}