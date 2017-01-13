module.exports = function translate (input) {
  return {
    type: 'FeatureCollection',
    features: input.resultSet.vehicle.map(translateVehicle)
  }
}

function translateVehicle (vehicle) {
  const feature = {
    attributes: vehicle,
    geometry: {
      type: 'Point',
      coordinates: `${vehicle.longitude}, ${vehicle.latitude}`
    }
  }
  const dateFields = ['expires', 'serviceDate', 'time']
  dateFields.forEach(field => {
    feature.attributes[field] = new Date(feature.attributes[field]).toISOString()
  })
  return feature
}
