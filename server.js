var express = require('express')

var app = express()

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

/* api endpoints */
var grounds = require('./src/api/grounds')
app.use('/api/grounds', grounds)

app.listen(5000, 'localhost', function (err) {
  if (err) { console.log(err); return }
  console.log('listening on http://localhost:5000')
})
