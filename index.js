const pkg = require('./package.json')
const provider = {
  name: 'trimet',
  hosts: false,
  disableIdParam: true,
  Model: require('./model'),
  version: pkg.version,
  type: 'provider'
}

module.exports = provider
