const mockAPIResponse = require('../mockAPI.js')

const rootRoute = async (req, res) => {
  res.sendFile('dist/index.html')
}
  
const testRoute = async (req, res) => {
  res.send(mockAPIResponse)
}

const nlpRoute = async (req, res) => {
  console.log(req.body)
  res.send(mockAPIResponse)
}

module.exports = {
  rootRoute,
  nlpRoute
}
