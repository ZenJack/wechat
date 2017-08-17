var express = require('express')
var app = express()
var appData = require('./data.json')
var router = express.Router()

router.get('/wechat', function (req, res) {
  res.json({
    errno: 0,
    data: appData.wechat
  })
})

router.get('/contacts', function (req, res) {
  res.json({
    errno: 0,
    data: appData.contacts
  })
})

router.get('/account', function (req, res) {
  res.json({
    errno: 0,
    data: appData.account
  })
})

router.get('/news', function (req, res) {
  res.json({
    errno: 0,
    data: appData.news
  })
})

// app.use('/static', express.static('../static'))
app.use('/api', router)

let port = 9500
console.log(`正在监听端口: ${port}`)
app.listen(port)

