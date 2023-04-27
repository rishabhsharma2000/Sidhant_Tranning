const jwt = require('jsonwebtoken')

module.exports.refreshVerifyTokken = async (req, res, next) => {
  const refreshToken = req.headers.cookie
  const token = refreshToken.split('=')[1]
  jwt.verify(token, 'rishah112000@33',
    (err, decoded) => {
      if (err) {
        return res.status(406).json({ message: 'Unauthorized' })
      } else {
        next()
      }
    })
}
