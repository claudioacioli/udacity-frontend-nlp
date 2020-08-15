const mockAPIResponse = require('../mockAPI.js')
const { sentiment } = require('../meaning')

const rootRoute = async (req, res) => {
  res.sendFile('dist/index.html')
}
  
const testRoute = async (req, res) => {
  res.send(mockAPIResponse)
}

const nlpRoute = async (req, res) => {
  const text = encodeURI(req.body.text);
  const key = process.env.API_KEY
  const result = await sentiment(key, text)
  res.send(result)
}

module.exports = {
  rootRoute,
  nlpRoute
}
