import 'drag-drop-touch-polyfill'
import Vue from 'vue'
import store from './store'
import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
