import Vue from 'vue';
import App from './App.vue';

Vue.prototype.codeMirrorInit = window.codeMirrorInit;
Vue.config.productionTip = true;
Vue.config.devtools = false;
new Vue({
  data: {
    settings: window.module_settings
  },
  render: h => h(App),
  create: () => {

  }
}).$mount('#app');
