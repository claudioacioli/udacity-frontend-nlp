import { byId } from './by'

function handleSubmit(event) {
  event.preventDefault()

  // check what text was put into the form field
  let formText = byId('name').value
  Client.checkForName(formText)

  console.log('::: Form Submitted :::')
  fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
      byId('results').innerHTML = res.message
  })
}

export { handleSubmit }
