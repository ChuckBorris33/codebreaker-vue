<template>
  <div class="GameBoard">
    <GuessList />
    <CurrentGuess />
    <PinOptions />
  </div>
</template>
<script>
import GuessList from './GuessList'
import CurrentGuess from './CurrentGuess'
import PinOptions from './PinOptions'

export default {
  name: 'GameBoard',
  components: {
    GuessList,
    CurrentGuess,
    PinOptions
  }
}
</script>
<style lang="scss">
.GameBoard {
  height: 92%;
  max-height: 92%;
}
</style>
