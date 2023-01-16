const POINTS = ['Love', '15', '30', '40']

const TIE = 'Deuce'
const AD = 'AD to %player%'
const WINNER = '%player% win the game'
const POINTS_DIFFERENCE_MESSAGE = [TIE, AD, WINNER]

export const UNKNOWN_PLAYER_ERROR = 'Unknown player, available players: P1,P2'

export const playMatch = (results = []) => {
  const players = {
    P1: { score: 0, rival: 'P2' },
    P2: { score: 0, rival: 'P1' },
  }

  const updateScoreMessage = (player) => {
    const { score: playerPoints, rival } = players[player]
    const { score: rivalPoints } = players[rival]

    const pointsDifference = playerPoints - rivalPoints
    if (rivalPoints >= 3 && playerPoints >= 3) {
      const message = POINTS_DIFFERENCE_MESSAGE[pointsDifference]
      return message?.replace('%player%', player)
    }
    if (playerPoints === 4) {
      return POINTS_DIFFERENCE_MESSAGE[2].replace('%player%', player)
    } else {
      return `${POINTS[players.P1.score]} - ${POINTS[players.P2.score]}`
    }
  }
  const matchResume = []
  for (let playerPoint of results) {
    const player = players[playerPoint.toUpperCase()]
    if (!player) throw new Error(UNKNOWN_PLAYER_ERROR)
    player.score += 1
    const message = updateScoreMessage(playerPoint)
    matchResume.push(message)
    if (message.includes('win')) break
  }
  return matchResume
}
