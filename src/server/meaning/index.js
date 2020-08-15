const https = require('https')

const sentiment = async (key, text) => (
  new Promise((resolve, reject) => {
    
    const options = {
      hostname: 'api.meaningcloud.com' ,
      path: `/sentiment-2.1?lang=en&key=${key}&of=json&txt=${encodeURI(text)}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': 0
      }
    } 

    const req = https.request(options, res => {
    
      let result = {'message': 'There is an error, please contact the administrator'}
      if(res.statusCode !== 200) {
        console.error(result)
        reject(result)
      }

      const data = [];
      res.on('data', chunk => data.push(chunk.toString()))
      res.on('end', () => {
       
        try {
          result = JSON.parse(data.join())
          resolve({'message': result.subjectivity})
        } catch (ex) {
          console.error(ex)
          reject(result)
        }

      })

    })
    .on('error', err => {
      console.error('Error on http', err)
      reject(result)
    })

    req.write('')
    req.end();
  })
)

module.exports = {
  sentiment
}
