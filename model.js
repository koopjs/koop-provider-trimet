/*
  model.js

  This file is required. It must export a class with at least one public function called `getData`

  Documentation: http://koopjs.github.io/docs/specs/provider/
*/
const request = require('request').defaults({gzip: true, json: true})
const config = require('config')
const translate = require('./translate')

function Model (options = {}) {
  this.key = options.key ? options.key : config.trimet.key
}

// This is the only public function you need to implement
Model.prototype.getData = function (req, callback) {
  // Call the remote API with our developer key
  request(`https://developer.trimet.org/ws/v2/vehicles/onRouteOnly/false/appid/${this.key}`, (err, res, body) => {
    if (err) return callback(err)
    // translate the response into geojson
    const geojson = translate(body)
    // Cache data for 10 seconds at a time by setting the ttl or "Time to Live"
    geojson.ttl = 10
    // hand off the data to Koop
    callback(null, geojson)
  })
}

module.exports = Model

/* Example raw API response
{
  "resultSet": {
  "queryTime": 1488465776220,
  "vehicle": [
    {
      "expires": 1488466246000,
      "signMessage": "Red Line to Beaverton",
      "serviceDate": 1488441600000,
      "loadPercentage": null,
      "latitude": 45.5873117,
      "nextStopSeq": 1,
      "source": "tab",
      "type": "rail",
      "blockID": 9045,
      "signMessageLong": "MAX  Red Line to City Center & Beaverton",
      "lastLocID": 10579,
      "nextLocID": 10579,
      "locationInScheduleDay": 24150,
      "newTrip": false,
      "longitude": -122.5927705,
      "direction": 1,
      "inCongestion": null,
      "routeNumber": 90,
      "bearing": 145,
      "garage": "ELMO",
      "tripID": "7144393",
      "delay": -16,
      "extraBlockID": null,
      "messageCode": 929,
      "lastStopSeq": 26,
      "vehicleID": 102,
      "time": 1488465767051,
      "offRoute": false
    }
  ]
}
*/
