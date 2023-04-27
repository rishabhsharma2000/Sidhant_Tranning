const jwt = require('jsonwebtoken')

module.exports.refreshJwtCreation = (payload) => {
  return jwt.sign(
    {
      id: payload

    },
    'rishah112000@33',
    {
      expiresIn: '1d'
    }
  )
}
