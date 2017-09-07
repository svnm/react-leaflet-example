var express = require('express')
var router = express.Router()
var feed = require('./feed.json')

router.get('/', function (req, res) {
  res.json(feed)
})

module.exports = router
