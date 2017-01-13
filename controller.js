module.exports = function (trimet, createController) {
  const controller = createController()
  // respond to the root route
  controller.index = function (req, res) {
    res.send('Hello Trimet')
  }

  // use the shared code in the BaseController to create a feature service
  controller.featureServer = function (req, res) {
    trimet.get((err, geojson) => {
      if (err) return res.status(500).json({error: err.message})
      controller.processFeatureServer(req, res, geojson)
    })
  }

  // return the controller so it can be used by koop
  return controller
}
