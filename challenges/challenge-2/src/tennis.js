const TIE = 'Deuce'
const AD = 'AD'

const POINTS = ['Love', '15', '30', '40']

const POINTS_DIFFERENCE_MESSAGE = {
  0: TIE,
  1: `${AD} to %player%`,
  2: '%player% win the game',
}

export const playMatch = (results = []) => {
  const players = {
    P1: { score: 0, rival: 'P2' },
    P2: { score: 0, rival: 'P1' },
  }

  const updateScoreMessage = (player) => {
    const { score: playerPoints, rival } = players[player]
    const { score: rivalPoints } = players[rival]
    let message = ''
    const pointsDifference = playerPoints - rivalPoints
    if (rivalPoints >= 3 && playerPoints >= 3) {
      message = POINTS_DIFFERENCE_MESSAGE[pointsDifference]
      return message?.replace('%player%', player)
    } else {
      if (playerPoints === 4) {
        message = POINTS_DIFFERENCE_MESSAGE[2].replace('%player%', player)
      } else {
        message = `${POINTS[playerPoints]} - ${POINTS[rivalPoints]}`
      }
      return message
    }
  }
  const matchResume = []
  for (let player of results) {
    players[player].score += 1
    const message = updateScoreMessage(player)
    matchResume.push(message)
    if (message.includes('win')) break
  }
  return matchResume
}
