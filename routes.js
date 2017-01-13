module.exports = {
  'get /trimet': 'index',
  'get /trimet/FeatureServer': 'featureServer',
  'get /trimet/FeatureServer/:layer': 'featureServer',
  'pst /trimet/FeatureServer/:layer': 'featureServer',
  'get /trimet/FeatureServer/:layer/:method': 'featureServer',
  'post /trimet/FeatureServer/:layer/:method': 'featureServer'
}
