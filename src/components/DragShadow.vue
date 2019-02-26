<template>
  <div
    id="DragShadow"
    ref="dragShadow"
  >
    <SimplePin
      v-if="dragData"
      :pin="dragData.pin"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SimplePin from './pins/SimplePin.vue'

export default {
  name: 'DragShadow',
  components: {
    SimplePin
  },
  computed: {
    ...mapState(['dragData'])
  },
  watch: {
    dragData (newDragData) {
      if (newDragData) {
        const img = this.$refs.dragShadow
        newDragData.event.dataTransfer.setDragImage(img, 10, 10)
      }
    }
  }
}
</script>

<style lang="scss">
#DragShadow {
  position: absolute;
  top: -150px;
}
</style>
