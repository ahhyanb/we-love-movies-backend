

function notFound(req, res, next) {
    res.status(404).json({ error: '${req.originalUrl} not found' });
  }

module.exports = notFound;