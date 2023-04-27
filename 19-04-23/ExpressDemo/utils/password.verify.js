const bcrypt = require('bcrypt')

module.exports.isPasswordValid = (reqpassword, initialPassword) => {
  const dcryptPassword = bcrypt.compare(
    reqpassword,
    initialPassword
  )

  if (!dcryptPassword) {
    return false
  }
  return true
}
