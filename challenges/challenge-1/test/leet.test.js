import { convertToLeet } from 'challenge-1/src/leet'
const jTest = test

export default describe('Leet test cases', () => {
  const testSamples = [
    {
      input: 'Hola mundo, reto de programación 1 en lenguaje leet! :D',
      expectedOutput:
        '#014 /\\/\\(_)^/)0, I2370 )3 |*I20&I24/\\/\\4[1ó^/ L 3^/ 13^/&(_)4,_|3 1337! :)',
    },
    {
      input: 'hola HOLA',
      expectedOutput: '#014 #014',
    },
    {
      input: '0123456789',
      expectedOutput: '0LREASbTBg',
    },
    {
      input: 'mM',
      expectedOutput: '/\\/\\/\\/\\',
    },
    {
      input: 'vV',
      expectedOutput: '\\/\\/',
    },
    {
      input: 'wW',
      expectedOutput: '\\/\\/\\/\\/',
    },
  ]
  testSamples.forEach((test) => {
    const { input, expectedOutput } = test
    jTest(`Test input ${input}`, () => {
      const leetInput = convertToLeet(input)
      expect(leetInput).toBe(expectedOutput)
    })
  })
})
