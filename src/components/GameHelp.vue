<template>
  <div class="GameHelp">
    <p class="u-nomargin">Try to guess right pin combination </p>
    <ol>
      <li>
        Drag pins
        <SimplePin
          :pin="pins[0]"
          class="u-inline Pin--fontSize"
        />
        and drop them in slots
        <SimplePin
          :pin="null"
          class="u-inline Pin--fontSize"
        />
      </li>
      <li>Click on Test button
        <BaseButton
          label="Test"
          class="u-cursorNormal u-inline"
        />
      </li>
      <li>
        Result will show up.
      </li>
    </ol>
    <div class="GuessRow HelpGuessRow">
      <SimplePin
        v-for="(pin, pinID) in exampleGuess"
        :key="pinID"
        :pin="pin"
        class="GuessRow-guessPin"
      />
      <div class="GuessRow-result">
        <ResultPin
          v-for="(result, resultID) in exampleResult"
          :key="resultID"
          :result="result"
        />
      </div>
    </div>
    <p>
      White pin
      <ResultPin
        :result="ResultType.COLOR_MATCH"
        class="u-inline Pin--fontSize"
      />
      means right color but wrong placement.
    </p>
    <p>
      Black pin
      <ResultPin
        :result="ResultType.EXACT_MATCH"
        class="u-inline Pin--fontSize"
      />
      means right color and right placement.
    </p>
    <p>Result pins are scrambled</p>
  </div>
</template>

<script>
import SimplePin from './pins/SimplePin'
import ResultPin from './pins/ResultPin'
import BaseButton from './common/BaseButton'
import { pins, ResultType } from '@/lib/game'

export default {
  name: 'GameHelp',
  components: {
    SimplePin,
    ResultPin,
    BaseButton
  },
  data () {
    return {
      pins,
      ResultType,
      exampleResult: [
        ResultType.NO_MATCH,
        ResultType.EXACT_MATCH,
        ResultType.NO_MATCH,
        ResultType.COLOR_MATCH
      ]
    }
  },
  computed: {
    exampleGuess () {
      return pins.slice(0, 4)
    }
  }
}
</script>

<style lang="scss">
.GameHelp {
  max-height: 80%;
  height: 80%;
  padding-left: 10px;
  padding-right: 10px;
}
.HelpGuessRow {
  display: grid;
  transition: transform 1s;
  grid-template-columns: repeat(4, 1fr) 2fr;
  align-items: center;
  justify-items: center;
  height: 14%;
  min-height: 14%;
  border-top: 1px solid $light-yellow;
  border-bottom: 1px solid $light-yellow;

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
