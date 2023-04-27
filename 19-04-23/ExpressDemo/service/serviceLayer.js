const userModel = require('../model/user.model')

module.exports = {

  singUp (opts) {
    try {
      return userModel.create(opts)
    } catch (err) {
      return err
    }
  },
  findSingleUser (id) {
    try {
      return userModel.findById({ _id: id })
    } catch (err) {
      return err
    }
  },
  userUpdation (id, opts) {
    try {
      return userModel.findByIdAndUpdate({ _id: id }, opts, {
        new: true
      })
    } catch (err) {
      return err
    }
  },
  removeUser (userId) {
    try {
      return userModel.findOneAndDelete({ id: userId })
    } catch (err) {
      return err
    }
  },
  login (opts) {
    try {
      return userModel.findOne({ username: opts.username })
    } catch (err) {
      return err
    }
  }
}
