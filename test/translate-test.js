const test = require('tape')
const translate = require('../translate.js')
const input = require('./fixtures/input.json')

test('it should properly translate input to geojson', t => {
  const geojson = translate(input)
  t.equal(geojson.type, 'FeatureCollection', 'creates a feature collection object')
  t.ok(geojson.features, 'has features')
  const feature = geojson.features[0]
  t.equal(feature.geometry.type, 'Point', 'creates point geometry')
  t.equal(feature.geometry.coordinates, '-122.675109, 45.5003833', 'translates geometry correctly')
  t.ok(feature.attributes, 'creates attributes')
  t.equal(feature.attributes.expires, new Date(1484268019000).toISOString(), 'translates expires field correctly')
  t.equal(feature.attributes.expires, new Date(1484268019000).toISOString(), 'translates serviceDate field correctly')
  t.equal(feature.attributes.expires, new Date(1484268019000).toISOString(), 'translates time field correctly')
  t.end()
})
