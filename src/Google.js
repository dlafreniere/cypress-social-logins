'use strict'
const GenericPlugin = require('./Plugins')

module.exports.GoogleSocialLogin = GenericPlugin.create({
  emailFieldSelector: 'input[type="email"]',
  emailButtonSelector: '#identifierNext',
  passwordFieldSelector: 'input[type="password"]',
  passwordButtonSelector: '#passwordNext'
})
