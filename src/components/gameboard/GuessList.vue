<template>
  <transition-group
    tag="div"
    class="GuessList"
    name="guesses"
  >
    <div
      v-for="(guessRow, index) in guesses"
      :key="index"
      class="GuessRow"
    >
      <SimplePin
        v-for="(pin, pinID) in guessRow.guess"
        :key="pinID"
        :pin="pin"
        class="GuessRow-guessPin"
      />
      <div class="GuessRow-result">
        <ResultPin
          v-for="(result, resultID) in guessRow.result"
          :key="resultID"
          :result="result"
        />
      </div>
    </div>
  </transition-group>
</template>

<script>
import { mapState } from 'vuex'
import SimplePin from '@/components//pins/SimplePin.vue'
import ResultPin from '@/components//pins/ResultPin.vue'

export default {
  name: 'GuessList',
  components: {
    SimplePin,
    ResultPin
  },
  computed: {
    ...mapState(['guesses'])
  }
}
</script>

<style lang="scss">

.guesses-enter {
  transform: translateY(+100%);
}

.guesses-enter-to {
  transform: translateY(0);
}

.GuessList {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 70%;
  max-height: 70%;
  overflow-y: auto;
}

.GuessRow {
  display: grid;
  transition: transform 1s;
  grid-template-columns: repeat(4, 1fr) 2fr;
  align-items: center;
  justify-items: center;
  height: 19%;
  min-height: 19%;
  border-top: 1px solid $light-yellow;

  &-result {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    align-self: stretch;
    justify-items: center;
    justify-self: stretch;
    border-left: 1px solid $light-yellow;
  }
}
</style>
