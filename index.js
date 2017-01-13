// the name of provider is used by koop to help build default routes for FeatureService and a preview
const pkg = require('./package.json')
const provider = {
  plugin_name: 'trimet',
  hosts: false,
  controller: require('./controller'),
  model: require('./model'),
  routes: require('./routes'),
  status: {
    version: pkg.version
  },
  type: 'provider'
}

module.exports = provider
