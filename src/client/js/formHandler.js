import { byId } from './by'
import { postData } from './api'

async function handleSubmit(event) {
  event.preventDefault()

  // check what text was put into the form field
  const formText = byId('name').value
  Client.checkForName(formText)

  console.log('::: Form Submitted :::')
  const data = {"text": formText}
  const result = await postData('http://localhost:8081/nlp', data)
  byId('results').innerHTML = result.message

}

export { handleSubmit }
