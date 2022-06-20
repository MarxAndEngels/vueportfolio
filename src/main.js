import Vue from 'vue'
import App from './App.vue'

import router from './router';

Vue.config.productionTip = false;

//цветной код
import VueCodeHighlight from 'vue-code-highlight';

Vue.use(VueCodeHighlight) //registers the v-highlight directive
//цветной код

//phone
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';
Vue.use(VueTelInput, [{allCountries: ['ru']}]);
//phone

//axios
window.axios = require('axios');
Vue.use(axios)
//axios

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
