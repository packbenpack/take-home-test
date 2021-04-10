const express = require('express')
const app = express()
const port = 3001
const groceries = require('./groceries')
var bodyParser = require('body-parser')

// const route

app.use(bodyParser.json())

app.use(express.static('client/dist'))

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
  res.send(index.html)
})

app.use('/groceries', groceries);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})