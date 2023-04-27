const ajv = require('./ajv.object')

const updateUserValidation = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 2,
      maxLength: 50

    },
    contact: {
      type: 'number',
      minimum: 1000000000,
      maximum: 9999999999
    },
    email: {
      type: 'string',
      pattern: '^[a-zA-Z0-9._%+-]+@gmail\\.com$'
    },
    password: {
      type: 'string',
      minLength: 8,
      maxLength: 20
    },
    username: {
      type: 'string',
      minLength: 5,
      maxLength: 20
    }
  }
}

module.exports = ajv.compile(updateUserValidation)
