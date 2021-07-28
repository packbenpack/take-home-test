const express = require('express')
const app = express()
const port = 3001
var bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(express.static('client/dist'))

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
  res.send(index.html)
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})