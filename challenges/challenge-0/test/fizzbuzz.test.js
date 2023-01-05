import { fizzBuzz } from 'challenge-0/src/fizzbuzz'

describe('Challenge 0', () => {
  const filterCondition = (num, expectedResult) =>
    fizzBuzz(num) === expectedResult
  test('fizz response', () => {
    const testSamples = [3, 6, 9]
    const expectedResult = 'fizz'
    const results = testSamples.filter((num) =>
      filterCondition(num, expectedResult)
    ).length
    expect(results).toBe(testSamples.length)
  })
  test('buzz response', () => {
    const testSamples = [5, 10, 25]
    const expectedResult = 'buzz'
    const results = testSamples.filter((num) =>
      filterCondition(num, expectedResult)
    ).length
    expect(results).toBe(testSamples.length)
  })

  test('fizzbuzz response', () => {
    const testSamples = [15, 30, 45]
    const expectedResult = 'fizzbuzz'
    const results = testSamples.filter((num) =>
      filterCondition(num, expectedResult)
    ).length
    expect(results).toBe(testSamples.length)
  })
})
