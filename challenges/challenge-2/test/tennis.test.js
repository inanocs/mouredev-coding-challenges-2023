import { playMatch } from 'challenge-2/src/tennis'
const it = test
describe('Challenge 2 suite case', () => {
  const testSamples = [
    {
      testName: 'P1 should win',
      input: ['P1', 'P1', 'P2', 'P2', 'P1', 'P2', 'P1', 'P1', 'P1'],
      expectedOutput: [
        '15 - Love',
        '30 - Love',
        '15 - 30',
        '30 - 30',
        '40 - 30',
        'Deuce',
        'AD to P1',
        'P1 win the game',
      ],
    },
    {
      testName: 'P2 should win',
      input: ['P1', 'P1', 'P2', 'P2', 'P1', 'P2', 'P1', 'P2', 'P2', 'P2'],
      expectedOutput: [
        '15 - Love',
        '30 - Love',
        '15 - 30',
        '30 - 30',
        '40 - 30',
        'Deuce',
        'AD to P1',
        'Deuce',
        'AD to P2',
        'P2 win the game',
      ],
    },
    {
      testName: 'P1 should win without ties',
      input: ['P1', 'P1', 'P2', 'P2', 'P1', 'P1'],
      expectedOutput: [
        '15 - Love',
        '30 - Love',
        '15 - 30',
        '30 - 30',
        '40 - 30',
        'P1 win the game',
      ],
    },
    {
      testName: 'P2 should win without ties',
      input: ['P2', 'P1', 'P1', 'P2', 'P2', 'P2'],
      expectedOutput: [
        'Love - 15',
        '15 - 15',
        '30 - 15',
        '30 - 30',
        '30 - 40',
        'P2 win the game',
      ],
    },
  ]
  testSamples.forEach((test) => {
    const { testName, input, expectedOutput } = test
    it(testName, () => {
      const matchResume = playMatch(input)
      expect(matchResume).toEqual(expectedOutput)
    })
  })
})
