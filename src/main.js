import Vue from 'vue';
import App from './App';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

new Vue({
  el: '#app',
  validations: {},
  render: h => h(App)
})
