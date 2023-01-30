import { printEvenPrimeFibonacciNumber } from 'challenge-4/src/index'

const it = test

describe('Challenge 4 suite test', () => {
  const testSamples = [
    {
      testName: 'Should be prime, odd and fibonacci',
      input: 1,
      expectedOutput: '1 is prime, is fibonacci and is odd',
    },
    {
      testName: 'Should be prime, even and fibonacci',
      input: 2,
      expectedOutput: '2 is prime, is fibonacci and is even',
    },
    {
      testName: 'Should not be prime, even and not fibonacci',
      input: 14,
      expectedOutput: '14 is not prime, is not fibonacci and is even',
    },
    {
      testName: 'Should be prime, odd and not fibonacci',
      input: 17,
      expectedOutput: '17 is prime, is not fibonacci and is odd',
    },
    {
      testName: 'Should not be prime, odd and fibonacci',
      input: 21,
      expectedOutput: '21 is not prime, is fibonacci and is odd',
    },
  ]

  testSamples.forEach((test) => {
    const { testName, input, expectedOutput } = test
    it(testName, () => {
      expect(printEvenPrimeFibonacciNumber(input)).toEqual(expectedOutput)
    })
  })
})
