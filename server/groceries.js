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

router.put('/increment', function(req, res) {
  controller.increment(req, res)
})

router.put('/decrement', function(req, res) {
  controller.decrement(req, res)
})

module.exports = router