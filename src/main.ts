import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;
Vue.config.keyCodes = {
  f1: 112,
  "media-play-pause": 179,
  up: [38, 87]
};

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
