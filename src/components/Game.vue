<template>
  <div
    ref="game"
    class="Game"
  >
    <DragShadow />
    <GameHeader />
    <Component :is="mainComponent" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { GameState } from '@/lib/game'
import GameSettings from './GameSettings'
import GameHeader from './GameHeader'
import GameBoard from './gameboard/GameBoard'
import GameEnd from './GameEnd'
import GameHelp from './GameHelp'
import DragShadow from './DragShadow'

export default {
  name: 'Game',
  components: {
    GameSettings,
    GameHeader,
    GameBoard,
    GameEnd,
    GameHelp,
    DragShadow
  },
  computed: {
    ...mapState(['gameState']),
    mainComponent () {
      switch (this.gameState) {
        case GameState.GAME:
          return GameBoard
        case GameState.SETTINGS:
          return GameSettings
        case GameState.HELP:
          return GameHelp
        case GameState.LOST:
        case GameState.WON:
          return GameEnd
      }
      return undefined
    }
  },
  mounted () {
    screen.orientation.lock('landscape')
    this.$refs.game.style = `max-width: ${window.innerHeight * 0.5625}px`
    window.addEventListener('resize', () => {
      this.$refs.game.style = `max-width: ${window.innerHeight * 0.5625}px`
    })
  }
}
</script>

<style lang="scss">
.Game {
  height: calc(100% - 40px);
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}

#dragShadow {
  position: absolute;
  top: -100vh;
}
</style>
