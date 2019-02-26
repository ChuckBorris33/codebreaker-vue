<template>
  <div
    :class="[sizeClass, colorClass]"
    class="Pin"
  />
</template>

<script>
export default {
  name: 'SimplePin',
  props: {
    pin: {
      type: Object,
      required: false,
      default: undefined
    }
  },
  data () {
    return {
      sizeClass: ''
    }
  },
  computed: {
    colorClass () {
      if (this.pin) {
        return `Pin--${this.pin.type}`
      } else {
        return 'Pin--empty'
      }
    }
  }
}
</script>

<style lang="scss">
.Pin {
  width: 5vh;
  height: 5vh;
  border: 1px solid black;
  border-radius: 50%;
  box-shadow: 1px 1px 2px black;
}

.Pin--empty {
  background-color: $empty;
  box-shadow: inset 1px 1px 2px black;
}

.Pin--dragable {
  cursor: url(https://ssl.gstatic.com/ui/v1/icons/mail/images/2/openhand.cur), default !important;
}

.Pin--fontSize {
  width: $base-font-size;
  height: $base-font-size;
}

.Pin--PIN1 {
  background-color: $pin1-background;
}

.Pin--PIN2 {
  background-color: $pin2-background;
}

.Pin--PIN3 {
  background-color: $pin3-background;
}

.Pin--PIN4 {
  background-color: $pin4-background;
}

.Pin--PIN5 {
  background-color: $pin5-background;
}

.Pin--PIN6 {
  background-color: $pin6-background;
}
</style>
