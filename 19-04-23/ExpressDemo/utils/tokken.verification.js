const jwt = require('jsonwebtoken')

module.exports.verifyTokken = async (req, res, next) => {
  const bearerHeader = req.headers.authorization
  if (typeof bearerHeader !== 'undefined') {
    const tokken = bearerHeader.split(' ')[1]
    await jwt.verify(tokken, 'rishah1231@33', (err, data) => {
      if (err) {
        res.status(403).json({ msg: 'Invalid tokken' })
      }
      next()
    })
  } else {
    res.status(403)
  }
}
