<template>
  <div
    :class="['Pin', colorClass, 'Pin--dragable']"
    draggable="true"
    @dragstart="dragPin({ pin, dragType: 'guess', event: $event, guessId: id })"
    @dragover.prevent
    @drop.prevent="dropPin({guessId: id, targetType: 'guess'})"
    @dragend="dragEnd"
  />
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import SimplePin from './SimplePin.vue'

export default {
  name: 'GuessPin',
  extends: SimplePin,
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    ...mapMutations(['dragEnd']),
    ...mapActions(['dropPin', 'dragPin'])
  }
}
</script>
