'use strict'
const request = require('request').defaults({gzip: true})
const translate = require('./translate')
// Set up a POJO cache that gets cleared every 5 seconds
const cache = {}
setInterval(() => { delete cache.data }, 5000)

module.exports = function (koop) {
  return {
    get (callback) {
      if (cache.data) return callback(null, cache.data)
      request('https://developer.trimet.org/ws/v2/vehicles/onRouteOnly/false/appid/8A0EBB788E8205888807BAC97', (err, res, body) => {
        if (err) return callback(err)
        const featureCollection = translate(body)
        callback(null, featureCollection)
        cache.data = featureCollection
      })
    }
  }
}
