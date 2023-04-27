const errorHandlerMiddleware = (err, req, res, next) => {
  res.status(err.statusCode).json({ msg: err })
}

module.exports = errorHandlerMiddleware
