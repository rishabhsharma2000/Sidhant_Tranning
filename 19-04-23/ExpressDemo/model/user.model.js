const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: Number, required: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  username: { type: String, required: true }

},
{
  timestamps: true
})

const userModel = mongoose.model('User', userSchema)
module.exports = userModel
