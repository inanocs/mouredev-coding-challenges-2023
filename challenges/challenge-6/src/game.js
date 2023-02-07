export const GameOptions = {
  ROCK: 'rock',
  PAPER: 'paper',
  SCISSORS: 'scissors',
  LIZARD: 'lizard',
  SPOCK: 'spock',
}

export const GameResults = {
  PLAYER1: 'Player 1',
  PLAYER2: 'Player 2',
  TIE: 'Tie',
}

export class Game {
  constructor(player1, player2) {
    const availableOptions = Object.values(GameOptions)
    if (
      !availableOptions.includes(player1) &&
      !availableOptions.includes(player2)
    )
      throw new Error(
        `Ilegal game option. Available options: ${availableOptions.toString()}`
      )
    this.player1 = player1
    this.player2 = player2
    this.GAME_RULES = {
      [GameOptions.ROCK]: [GameOptions.SCISSORS, GameOptions.LIZARD],
      [GameOptions.PAPER]: [GameOptions.ROCK, GameOptions.SPOCK],
      [GameOptions.SCISSORS]: [GameOptions.PAPER, GameOptions.LIZARD],
      [GameOptions.LIZARD]: [GameOptions.PAPER, GameOptions.SPOCK],
      [GameOptions.SPOCK]: [GameOptions.SCISSORS, GameOptions.ROCK],
    }
  }

  getWinner() {
    if (this.isTie()) return GameResults.TIE
    return this.GAME_RULES[this.player1].includes(this.player2)
      ? GameResults.PLAYER1
      : GameResults.PLAYER2
  }
  isTie() {
    return this.player1 === this.player2
  }
}

export const getMaxWinnerGames = (results = []) => {
  const initial = {
    [GameResults.PLAYER1]: 0,
    [GameResults.PLAYER2]: 0,
  }
  const playerPoints = results.reduce((playerPoints, match) => {
    const winner = match?.getWinner()
    if (playerPoints[winner] === undefined) {
      playerPoints[GameResults.PLAYER1] += 1
      playerPoints[GameResults.PLAYER2] += 1
    } else {
      playerPoints[winner] += 1
    }
    return playerPoints
  }, initial)

  const maxCount = Math.max(...Object.values(playerPoints))
  const mostFrequent = Object.keys(playerPoints).filter(
    (key) => playerPoints[key] === maxCount
  )
  return mostFrequent.length === 1 ? mostFrequent.at(0) : GameResults.TIE
}
