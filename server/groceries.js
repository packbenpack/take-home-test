var express = require('express')
var router = express.Router()
var controller = require('./controllers/controllers')

router.get('/', function (req, res) {
  controller.get(req, res)
})

router.post('/add', function (req, res) {
  controller.addGroceries(req, res)
})

router.delete('/delete', function(req, res) {
  controller.deleteItem(req, res)
})

router.delete('/deleteAll', function(req, res) {
  controller.deleteAll(req, res)
})

module.exports = router