const routes = {
  'get /trimet': 'index',
  'get /trimet/FeatureServer': 'featureServer',
  'get /trimet/FeatureServer/:layer': 'featureServer',
  'post /trimet/FeatureServer/:layer': 'featureServer',
  'get /trimet/FeatureServer/:layer/:method': 'featureServer',
  'post /trimet/FeatureServer/:layer/:method': 'featureServer'
}

module.exports = routes
