<template>
  <div class="GameEnd">
    <div class="GameEnd-resultText">
      {{ resultText }}
    </div>
    <div class="GameEnd-resultCode">
      <template v-if="isGameLost">
        <p>Last guess</p>
        <div class="GameEnd-code">
          <SimplePin
            v-for="(pin, pinId) in currentGuess"
            :key="pinId"
            :pin="pin"
          />
        </div>
      </template>
      <p>Code is</p>
      <div class="GameEnd-code">
        <SimplePin
          v-for="(pin, pinId) in code"
          :key="pinId"
          :pin="pin"
        />
      </div>
      <BaseButton
        label="Back"
        class="GameEnd-backButton"
        @click="backToSettings()"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { GameState } from '@/lib/game'
import SimplePin from './pins/SimplePin'
import BaseButton from './common/BaseButton'

export default {
  name: 'GameEnd',
  components: {
    SimplePin,
    BaseButton
  },
  computed: {
    ...mapState(['gameState', 'code', 'currentGuess']),
    resultText () {
      return this.isGameLost ? 'GAME OVER' : 'YOU WON'
    },
    isGameLost () {
      return this.gameState === GameState.LOST
    }
  },
  methods: {
    ...mapMutations(['setGameState']),
    backToSettings () {
      this.setGameState({ gameState: GameState.SETTINGS })
    }
  }
}
</script>

<style lang="scss">

.GameEnd {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  &-resultText {
    font-size: $heading-font-size;
  }

  &-resultCode {
    width: 80%;
    text-align: center;
  }

  &-code {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    justify-items: center;
  }

  &-backButton {
    margin-top: 1em;
  }
}
</style>
