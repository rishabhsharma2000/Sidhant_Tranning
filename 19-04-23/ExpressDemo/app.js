const express = require('express')
require('dotenv').config()
const app = express()
const { mongoConnection } = require('./db/connection')
const routes = require('./Routes/user')
const errorHandlerMiddleware = require('./middleware/error.handler')

app.use(express.json())
app.use(express.urlencoded())

app.use('/', routes)

app.all('*', errorHandlerMiddleware)

const Port = process.env.PORT || 5050

mongoConnection()

app.listen(Port, (err) => {
  if (err) {
    console.log('Server Error')
  }
  console.log(`Server start at http://localhost:${Port}`)
})
