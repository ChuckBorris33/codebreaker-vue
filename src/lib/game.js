export const ResultType = {
  EXACT_MATCH: 'EXACT_MATCH',
  COLOR_MATCH: 'COLOR_MATCH',
  NO_MATCH: 'NO_MATCH'
}

export const GameState = {
  SETTINGS: 'SETTINGS',
  GAME: 'GAME',
  WON: 'WON',
  LOST: 'LOST',
  HELP: 'HELP'
}

export const pins = [
  { id: 0, type: 'PIN1' },
  { id: 1, type: 'PIN2' },
  { id: 2, type: 'PIN3' },
  { id: 3, type: 'PIN4' },
  { id: 4, type: 'PIN5' },
  { id: 5, type: 'PIN6' }
]

export function generateGame (settings) {
  const pinsToUse = [...pins]
  const gamePins = []

  if (settings.canBeEmpty) {
    pinsToUse.push(undefined)
  }
  for (let i = 0; i < 4; i++) {
    const randomPinId = Math.floor(Math.random() * pinsToUse.length)

    gamePins[i] = pinsToUse[randomPinId]
    if (!settings.canRepeat) {
      pinsToUse.splice(randomPinId, 1)
    }
  }
  return gamePins
}

export function testCodeMatch (currentGuess, code) {
  const codePinIds = code.map((pin) => pin ? pin.id : undefined)
  const guessPinIds = currentGuess.map((pin) => pin ? pin.id : undefined)
  const result = [ResultType.NO_MATCH, ResultType.NO_MATCH,
    ResultType.NO_MATCH, ResultType.NO_MATCH]
  const len = currentGuess.length
  for (let i = 0; i < len; i++) {
    const pinId = guessPinIds[i]
    if (guessPinIds[i] === codePinIds[i]) {
      codePinIds[i] = -1
      result[i] = ResultType.EXACT_MATCH
    } else if (codePinIds.some((el) => el === pinId)) {
      const codeIndex = codePinIds.indexOf(pinId)
      codePinIds[codeIndex] = -1
      result[codeIndex] = ResultType.COLOR_MATCH
    }
  }
  shuffleArray(result)
  return result
}

export function evaluateGame (guessCount, lastResult) {
  const isGameWon = lastResult.every((result) => result === ResultType.EXACT_MATCH)
  if (isGameWon) {
    return GameState.WON
  } else if (guessCount >= 5) {
    return GameState.LOST
  } else {
    return GameState.GAME
  }
}

function shuffleArray (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}
