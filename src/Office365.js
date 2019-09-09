'use strict'
const GenericPlugin = require('./Plugins')

module.exports.Office365Login = GenericPlugin.create({
  emailFieldSelector: 'input[type="email"]',
  emailButtonSelector: '#idSIButton9',
  passwordFieldSelector: 'input[type="password"]',
  passwordButtonSelector: '#idSIButton9'
})
