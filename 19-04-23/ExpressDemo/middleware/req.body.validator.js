
const validateMiddleware = (validateSchema) => {
  return (req, res, next) => {
    const valid = validateSchema(req.body)
    if (!valid) {
      res.status(404).json(validateSchema.errors)
    }
    next()
  }
}

module.exports = validateMiddleware
