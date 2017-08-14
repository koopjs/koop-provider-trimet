# Koop-TriMet
## A provider for the TriMet Bus API

[![Greenkeeper badge](https://badges.greenkeeper.io/koopjs/koop-provider-trimet.svg)](https://greenkeeper.io/)

This is a plugin to [Koop](http://koopjs.github.io) that requests data from the [TriMet bus API](https://developer.trimet.org) and returns data in an Esri-compatible [Geoservices](http://geoservices.github.io/) reponse.

[View a live example](http://dcdev.maps.arcgis.com/home/item.html?id=2603e7e3f10742f78093edf8ea2adfd8#visualize)

## Usage
### As a Feature Service
All requests are routed through `http://$koopserver/trimet/FeatureServer/0`

### Koop Plugin
It must be used as a Koop plugin. Here's an example server configuration.

```javascript
'use strict'
// initialize Koop with configs from env
var Koop = require('koop')
var config = require('config')
var koop = Koop(config)

// register providers
var trimet = require('koop-trimet')
koop.register(trimet)

// set up the actual app server
var express = require('express')
var app = express()
app.use(koop)
app.get('/status', (req, res) => res.status(200).json({status: 'up'}))
app.listen(80, function () { console.log('we\'re up and running') })
```
