const jwt = require('jsonwebtoken')

module.exports.accessJwtCreation = (payload) => {
  return jwt.sign(
    {
      id: payload

    },
    'rishah1231@33',
    {
      expiresIn: '1m'
    }
  )
}
