import {
  Game,
  GameOptions,
  GameResults,
  getMaxWinnerGames,
} from 'challenge-6/src/game'
const it = test
describe('Challenge 6 - Class Game suite test', () => {
  const testSamples = [
    {
      name: 'Player 1 should win',
      input: [GameOptions.LIZARD, GameOptions.SPOCK],
      expectedOutput: GameResults.PLAYER1,
    },
    {
      name: 'Player 2 should win',
      input: [GameOptions.SPOCK, GameOptions.LIZARD],
      expectedOutput: GameResults.PLAYER2,
    },
    {
      name: 'Should be a Tie',
      input: [GameOptions.SPOCK, GameOptions.SPOCK],
      expectedOutput: GameResults.TIE,
    },
  ]
  testSamples.forEach((test) => {
    const { name, input, expectedOutput } = test
    it(name, () => {
      const game = new Game(...input)
      expect(game.getWinner()).toEqual(expectedOutput)
    })
  })

  it('Should throw an error, nonexistent game option', () => {
    expect(() => new Game('test', GameOptions.LIZARD)).toThrowError()
  })
})

describe('Challenge 6 - getMaxWinnerGames suite test', () => {
  const testSamples = [
    {
      name: 'Player 1 should win',
      input: [
        new Game(GameOptions.LIZARD, GameOptions.SPOCK),
        new Game(GameOptions.SPOCK, GameOptions.LIZARD),
        new Game(GameOptions.PAPER, GameOptions.ROCK),
      ],
      expectedOutput: GameResults.PLAYER1,
    },
    {
      name: 'Player 2 should win',
      input: [
        new Game(GameOptions.LIZARD, GameOptions.SPOCK),
        new Game(GameOptions.SPOCK, GameOptions.LIZARD),
        new Game(GameOptions.LIZARD, GameOptions.SCISSORS),
      ],
      expectedOutput: GameResults.PLAYER2,
    },
    {
      name: 'Should be a Tie',
      input: [
        new Game(GameOptions.LIZARD, GameOptions.SPOCK),
        new Game(GameOptions.SPOCK, GameOptions.LIZARD),
        new Game(GameOptions.PAPER, GameOptions.PAPER),
      ],
      expectedOutput: GameResults.TIE,
    },
  ]
  testSamples.forEach((test) => {
    const { name, input, expectedOutput } = test
    it(name, () => {
      const result = getMaxWinnerGames(input)
      expect(result).toEqual(expectedOutput)
    })
  })
})
