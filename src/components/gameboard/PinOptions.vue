<template>
  <div class="PinOptions">
    <OptionPin
      v-for="(pin, id) in pins"
      :id="id"
      :key="id"
      :pin="pin"
    />
  </div>
</template>

<script>
import { pins } from '@/lib/game.js'
import OptionPin from '@/components/pins/OptionPin.vue'

export default {
  name: 'PinOptions',
  components: {
    OptionPin
  },
  data () {
    return {
      pins
    }
  }
}
</script>

<style lang="scss">
.PinOptions {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  justify-items: center;
  height: 14.28%;
}
</style>
