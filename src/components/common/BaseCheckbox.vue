<template>
  <div class="BaseCheckbox">
    <span
      :class="{'BaseCheckbox-tick--active': value}"
      class="BaseCheckbox-tick"
      @click="toggleValue"
    >
      <input
        :id="id"
        v-model="value"
        type="hidden"
      >
    </span>
    <label>{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'BaseCheckbox',
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      value: this.checked
    }
  },
  watch: {
    value (newValue, oldValue) {
      this.$emit('input', newValue)
    }
  },
  methods: {
    toggleValue () {
      this.value = !this.value
    }
  }
}
</script>

<style lang="scss">
.BaseCheckbox {
  position: relative;
  display: block;
  padding-left: 1.5em;

  &-tick{
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    height: 0.6em;
    width: 0.6em;
    background-color: $dark-blue;
    border: 0.2em solid $light-blue;
    border-radius: 0.3em;
  }

  &-tick--active{
    background-color: $dark-blue;

    &:after {
      content: 'x';
      position: relative;
      font-size: 0.8em;
      top: -0.4em;
      left: 0.15em;
    }
  }
}
</style>
