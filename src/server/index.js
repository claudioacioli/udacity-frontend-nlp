// Requiriments
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
// Routes
const { rootRoute, testRoute } = require('./routes')
// Settings
const port = 8081
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('dist'))
app.get('/', rootRoute)
app.get('/test', testRoute)
// Running
console.log(__dirname)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
