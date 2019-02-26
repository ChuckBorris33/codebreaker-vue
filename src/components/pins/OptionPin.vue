<template>
  <div
    :class="['Pin', colorClass, 'Pin--dragable']"
    draggable="true"
    @dragstart="dragPin({ pin, dragType: 'options', event: $event })"
    @dragend="dragEnd"
  />
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import SimplePin from './SimplePin.vue'

export default {
  name: 'OptionPin',
  extends: SimplePin,
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    ...mapMutations(['dragEnd']),
    ...mapActions(['dragPin'])
  }
}
</script>
