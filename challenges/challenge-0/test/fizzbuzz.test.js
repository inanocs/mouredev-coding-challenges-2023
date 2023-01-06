import { fizzBuzz } from 'challenge-0/src/fizzbuzz'
const jTest = test

describe('Challenge 0 - FizzBuzz', () => {
  const testCases = [
    {
      name: 'fizz response',
      sample: [3, 6, 9],
      expectedResult: 'fizz',
    },
    {
      name: 'buzz response',
      sample: [5, 10, 25],
      expectedResult: 'buzz',
    },
    {
      name: 'fizzbuzz response',
      sample: [15, 30, 45],
      expectedResult: 'fizzbuzz',
    },
  ]
  testCases.forEach((testCase) => {
    const { name, sample, expectedResult } = testCase
    const filterCondition = (num) => fizzBuzz(num) === expectedResult
    test(name, () => {
      const resultsLength = sample.filter(filterCondition).length

      expect(resultsLength).toBe(sample.length)
    })
  })
})
