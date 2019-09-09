'use strict'

const {GoogleSocialLogin} = require('./Google')
const {Office365Login} = require('./Office365')

module.exports = {
  plugins: {GoogleSocialLogin, Office365Login}
}
