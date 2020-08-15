import { getData, postData } from '../src/client/js/api'

describe('Testing Api utilitity', () => {
  
  test('Testing the getData function', () => expect(getData).toBeDefined())

  test('Testing the postData function', () => expect(postData).toBeDefined())

})
