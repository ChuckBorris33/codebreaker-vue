<template>
  <button
    class="BaseButton"
    @click="$emit('click')"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.BaseButton {
  padding: 5px;
  padding-right: 20px;
  padding-left: 20px;
  font-family: $font;
  font-size: $button-font-size;
  color: $button-text;
  cursor: pointer;
  background-color: $button-background;
  border: 1px solid $button-border-color;
  border-radius: 5%;
  box-shadow: 1px 1px 1px $button-border-color;
}
</style>
