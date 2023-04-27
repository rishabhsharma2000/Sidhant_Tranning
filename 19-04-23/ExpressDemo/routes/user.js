const express = require('express')
const { createUser, findUser, updateUser, deleteUser, loginUser, autoLogin, accessByRefreshToken } = require('../Controller/user.controller.operation')
const validateMiddleware = require('../middleware/req.body.validator')
const userSchema = require('../schemas/user.add')
const updateUserSchema = require('../schemas/user.update')
const { verifyTokken } = require('../utils/tokken.verification')
const { refreshVerifyTokken } = require('../utils/refresh.verification')

const routes = express.Router()

routes.post('/login', loginUser)
routes.post('/signup', validateMiddleware(userSchema), createUser)
routes.get('/find_user/:id', verifyTokken, findUser)
routes.put('/update_user/:id', validateMiddleware(updateUserSchema), updateUser)
routes.delete('/delete_user/:id', deleteUser)
routes.get('/auto-login/:id', verifyTokken, autoLogin)
routes.post('/refresh/:id', refreshVerifyTokken, accessByRefreshToken)
module.exports = routes
