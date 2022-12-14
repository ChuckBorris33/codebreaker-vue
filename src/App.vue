<template>
  <div id="app">
    <GameView />
  </div>
</template>

<script>
import GameView from './components/GameView'

export default {
  name: 'App',
  components: {
    GameView
  }
}
</script>

<style lang='scss'>

body {
  margin: 0;
}

html,
body,
#app {
  height: 100%;
  overflow: hidden;
  font-family: $font;
  font-size: $base-font-size;
  color: $primary-color;
  touch-action: none;
  background-color: $background-color;
  border-bottom: 1px solid $primary-color;
}

.u-textCenter {
  text-align: center;
}

.u-inline {
  display: inline-block;
}

.u-cursorNormal {
  cursor: default;
}

.u-nomargin {
  margin: 0px;
}

.u-hidden {
  visibility: hidden;
}
.u-pb1 {
  padding-bottom: 1em;
}

</style>
