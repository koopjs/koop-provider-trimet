module.exports = function translate (input) {
  return {
    type: 'FeatureCollection',
    features: input.resultSet.vehicle.map(translateVehicle)
  }
}

function translateVehicle (vehicle) {
  const feature = {
    properties: vehicle,
    geometry: {
      type: 'Point',
      coordinates: `${vehicle.longitude}, ${vehicle.latitude}`
    }
  }
  const dateFields = ['expires', 'serviceDate', 'time']
  dateFields.forEach(field => {
    feature.properties[field] = new Date(feature.properties[field]).toISOString()
  })
  return feature
}
