<template>
  <div class="GameHeader">
    <span
      :class="{'u-hidden': !showBackButton}"
      class="BackButton"
      @click="backClicked"
    >
      &lt;---
    </span>
    <h1 class="GameTitle">
      codeBreaker_&gt;
    </h1>
    <span
      :class="{'u-hidden': !showHelpButton}"
      class="HelpButton"
      @click="helpClicked"
    >
      ?
    </span>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import { GameState } from '@/lib/game'

export default {
  name: 'GameHeader',
  computed: {
    ...mapState(['gameState']),
    showBackButton () {
      return this.gameState !== GameState.SETTINGS
    },
    showHelpButton () {
      return this.gameState === GameState.GAME
    }
  },
  methods: {
    ...mapMutations(['setGameState']),
    backClicked () {
      if (this.gameState === GameState.HELP) {
        this.setGameState({ gameState: GameState.GAME })
      } else {
        this.setGameState({ gameState: GameState.SETTINGS })
      }
    },
    helpClicked () {
      this.setGameState({ gameState: GameState.HELP })
    }
  }
}
</script>

<style lang="scss">
.GameHeader {
  height: 10%;
  max-height: 10%;
  display: flex;
  justify-content: space-between;
}

.GameTitle {
  flex-grow: 2;
  padding-bottom: 5px;
  margin: 0;
  font-size: $heading-font-size;
  text-align: center;
  vertical-align: middle;
}

.BackButton {
  flex-grow: 1;
  padding-left: 10px;
  font-size: $heading-font-size;
  font-weight: bold;
  letter-spacing: -0.3em;
  cursor: pointer;
}

.HelpButton {
  flex-grow: 1;
  position: relative;
  padding-right: 10px;
  right: 0px;
  font-size: $heading-font-size;
  font-weight: bold;
  cursor: pointer;
}
</style>
