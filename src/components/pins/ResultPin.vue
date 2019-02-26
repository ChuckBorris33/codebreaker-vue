<script>
import SimplePin from './SimplePin.vue'
import { ResultType } from '@/lib/game.js'

export default {
  name: 'ResultPin',
  extends: SimplePin,
  props: {
    result: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      sizeClass: 'Pin--small'
    }
  },
  computed: {
    colorClass () {
      return {
        [ResultType.NO_MATCH]: 'Pin--empty',
        [ResultType.EXACT_MATCH]: 'Pin--exactMatch',
        [ResultType.COLOR_MATCH]: 'Pin--colorMatch'
      }[this.result]
    }
  }
}
</script>

<style lang="scss">
.Pin--small {
  width: 3vh;
  height: 3vh;
}

.Pin--exactMatch {
  background-color: $black;
}

.Pin--colorMatch {
  background-color: $white;
}
</style>
