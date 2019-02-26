<template>
  <div class="GameSettings">
    <div class="GameSettings-checkbox">
      <BaseCheckbox
        id="canRepeat"
        v-model="canRepeat"
        class="u-pb1"
        type="checkbox"
        label="Allow repeating pins"
      />
      <BaseCheckbox
        id="canRepeat"
        v-model="canBeEmpty"
        type="checkbox"
        label="Allow empty pins"
      />
    </div>
    <BaseButton
      label="Start Game"
      @click="startGame({canRepeat, canBeEmpty})"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import BaseButton from './common/BaseButton'
import BaseCheckbox from './common/BaseCheckbox'

export default {
  name: 'GameSettings',
  components: {
    BaseButton,
    BaseCheckbox
  },
  data () {
    return {
      canRepeat: false,
      canBeEmpty: false
    }
  },
  methods: {
    ...mapMutations(['startGame'])
  }
}
</script>

<style lang="scss">
.GameSettings {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  &-checkbox {
    padding-bottom: 10%;
  }
}
</style>
