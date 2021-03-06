import Vue from 'vue';
import i18n from './plugins/vue-i18n';
import vuetify from '@/plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './plugins/vue-sweetalert2';
import './plugins/vue-toasted';
import './plugins/vue-moment';
import './plugins/vee-validate';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App),
}).$mount(`#app`);

require(`dotenv`).config();
