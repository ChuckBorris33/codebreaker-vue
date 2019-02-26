<template>
  <div class="CurrentGuess">
    <GuessPin
      v-for="(pin, guessID) in currentGuess"
      :id="guessID"
      :key="guessID"
      :pin="pin"
    />
    <div class="CurrentGuess-testButton">
      <BaseButton
        label="Test"
        @click="testCode"
      />
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import BaseButton from '@/components/common/BaseButton'
import GuessPin from '@/components/pins/GuessPin'

export default {
  name: 'CurrentGuess',
  components: {
    BaseButton,
    GuessPin
  },
  computed: {
    ...mapState(['currentGuess'])
  },
  methods: {
    ...mapActions(['testCode'])
  }
}
</script>
<style lang="scss">
.CurrentGuess {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  justify-items: center;
  height: 14.28%;
  border-top: 1px solid $light-yellow;
  border-bottom: 1px solid $light-yellow;

  &-testButton {
    grid-column: -3 / span 2;
  }
}
</style>
