import { helloWorld } from 'challenge-5/src/helloworld'

const it = test

describe('Challenge 5 suite case', () => {
  it('Should print hello world', () => {
    expect(helloWorld()).toEqual(console.log('Hello World!'))
  })
})
