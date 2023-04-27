
const { findSingleUser, userUpdation, removeUser, singUp, login } = require('../service/serviceLayer')
const bcrypt = require('bcrypt')
const asyncMiddleware = require('../middleware/async.handler')
const { isPasswordValid } = require('../utils/password.verify')
const { accessJwtCreation } = require('../utils/access.token')
const { refreshJwtCreation } = require('../utils/refresh.token')
require('dotenv').config()

module.exports = {
  createUser: asyncMiddleware(async (req, res, next) => {
    const newUser = {
      name: req.body.name,
      contact: req.body.contact,
      email: req.body.email,
      password: req.body.password,
      username: req.body.username
    }
    newUser.password = bcrypt.hashSync(newUser.password, 8)
    console.log(newUser.password)

    const createdUser = await singUp(newUser)
    if (!createdUser) {
      return next()
    }

    return res.status(201).json({ msg: 'User created successfully', user: createdUser })
  }),

  findUser: asyncMiddleware(async (req, res, next) => {
    const id = req.params.id
    const user = await findSingleUser(id)
    if (!user) {
      return next()
    }
    res.status(200).json({ user })
  }),

  updateUser: asyncMiddleware(async (req, res, next) => {
    const opts = {
      name: req.body.name,
      contact: req.body.contact,
      email: req.body.email,
      password: req.body.password,
      username: req.body.username
    }

    const id = req.params.id
    const updatedData = await userUpdation(id, opts)
    if (!updatedData) {
      next()
    }
    return res.status(201).json({ msg: 'User Updated successfully', updatedUser: updatedData })
  }),
  deleteUser: asyncMiddleware(async (req, res, next) => {
    const id = req.params
    const deletedUser = await removeUser(id)
    if (!deletedUser) {
      return res.status(401).json({ msg: 'User not found' })
    }
    return res.status(200).json({ msg: 'User Deleted successfully' })
  }
  ),
  loginUser: asyncMiddleware(async (req, res, next) => {
    const opt = {
      username: req.body.username,
      password: req.body.password
    }
    const userLogin = await login(opt)
    if (!userLogin) {
      res.status(401).json({ msg: 'User does not  Exist' })
    }
    const passwordValid = isPasswordValid(opt.password, userLogin.password)
    if (passwordValid) {
      const accessTokken = accessJwtCreation(userLogin.id)
      const refreshToken = refreshJwtCreation(userLogin.id)
      res.cookie('jwt', refreshToken, {
        httpOnly: true,
        secure: true,
        maxAge: 24 * 60 * 60 * 1000
      })
      return res.status(200).json({
        user: {
          id: userLogin._id,
          email: userLogin.email,
          username: userLogin.username
        },
        message: 'Login successfull',
        accessToken: accessTokken
      })
    }
  }),
  autoLogin: asyncMiddleware(async (req, res, next) => {
    const id = req.params.id

    const tokken = accessJwtCreation(id)
    return res.status(200).json({
      message: 'New Token Generated',
      accessToken: tokken
    })
  }),
  accessByRefreshToken: asyncMiddleware(async (req, res, next) => {
    const id = req.params.id

    const tokken = accessJwtCreation(id)
    return res.status(200).json({
      message: 'New Access Token Generated',
      accessToken: tokken
    })
  })
}
