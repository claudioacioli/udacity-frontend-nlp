import { byId } from './by'
import { getData } from './api'

async function handleSubmit(event) {
  event.preventDefault()

  // check what text was put into the form field
  let formText = byId('name').value
  Client.checkForName(formText)

  console.log('::: Form Submitted :::')
  const result = await getData('http://localhost:8081/test')
  byId('results').innerHTML = result.message

}

export { handleSubmit }
