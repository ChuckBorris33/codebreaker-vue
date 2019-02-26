import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import { GameState } from '@/lib/game'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    gameState: GameState.SETTINGS,
    code: [],
    guesses: [],
    currentGuess: [undefined, undefined, undefined, undefined],
    dragData: undefined
  },
  mutations,
  actions,
  strict: debug
})
