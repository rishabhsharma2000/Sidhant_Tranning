const mongoose = require('mongoose')
require('dotenv').config()

exports.mongoConnection = () => {
  try {
    mongoose.connect(
      'mongodb+srv://rishabsharma112000:Rishabh112000@cluster0.ed0hcwj.mongodb.net/siddhant-express?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      (err) => {
        if (err) {
          console.log(`Mongoose Connection Error ${err}`)
        } else {
          console.log('Data Base Connected')
        }
      }
    )
  } catch (err) {
    console.log(err)
  }
}
