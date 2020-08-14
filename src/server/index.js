// Requiriments
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
// Routes
const { rootRoute, nlpRoute } = require('./routes')
// Settings
const port = 8081
const app = express()
dotenv.config()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('dist'))
app.get('/', rootRoute)
app.post('/nlp', nlpRoute)
// Running
console.log(__dirname)
app.listen(port, () => {
  console.log(`API KEY ${process.env.API_KEY}`)
  console.log(`Example app listening on port ${port}!`)
})
