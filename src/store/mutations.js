import { generateGame, GameState } from '@/lib/game.js'
import { v4 as uuidv4 } from 'uuid'
import Vue from 'vue'

const mutations = {
  startGame (state, payload) {
    const gamePins = generateGame({
      canRepeat: payload.canRepeat,
      canBeEmpty: payload.canBeEmpty
    })
    state.gameState = GameState.GAME
    state.code = gamePins
    state.guesses = []
    state.currentGuess = [undefined, undefined, undefined, undefined]
  },
  guessPin (state, payload) {
    Vue.set(state.currentGuess, payload.guessId, payload.pin)
  },
  removePin (state, payload) {
    Vue.set(state.currentGuess, payload.guessId, undefined)
  },
  addGuess (state, payload) {
    state.guesses = [
      ...state.guesses,
      { guess: state.currentGuess, result: payload.result, id: uuidv4() }
    ]
    state.currentGuess = [undefined, undefined, undefined, undefined]
  },
  setGameState (state, payload) {
    state.gameState = payload.gameState
  },
  dragStart (state, payload) {
    state.dragData = payload
  },
  dragEnd (state) {
    state.dragData = undefined
  }
}

export default mutations
