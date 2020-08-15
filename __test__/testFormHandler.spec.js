import regeneratorRuntime from "regenerator-runtime";
import { handleSubmit } from '../src/client/js/formHandler'

describe('Testing the submit functionality', () => {
  test('Testing the handleSubmit() function', () => {
    expect(handleSubmit).toBeDefined()
  })
})
