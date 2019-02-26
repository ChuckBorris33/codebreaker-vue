import { GameState, testCodeMatch, evaluateGame } from '@/lib/game'

const actions = {
  testCode ({ commit, state }) {
    const result = testCodeMatch(state.currentGuess, state.code)
    const gameState = evaluateGame(state.guesses.length, result)
    if (gameState === GameState.GAME) {
      commit('addGuess', { result })
    } else if (gameState !== state.gameState) {
      commit('setGameState', { gameState })
    }
  },
  dropPin ({ commit, state }, dropData) {
    if (state.dragData.dragType === 'guess') {
      // Switching pins
      let pin = state.currentGuess[dropData.guessId]
      commit('guessPin', { pin, guessId: state.dragData.guessId })
    }
    commit('guessPin', { pin: state.dragData.pin, guessId: dropData.guessId })
  },
  dragPin ({ commit, state }, dragData) {
    if (dragData.dragType === 'guess') {
      commit('removePin', { guessId: dragData.guessId })
    }
    commit('dragStart', dragData)
  }
}

export default actions
