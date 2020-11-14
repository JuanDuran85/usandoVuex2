import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

Vue.filter('capitaliza', (valor)=> {
  if (!valor) return '';
  valor = valor.toString();
  return valor.charAt(0).toUpperCase() + valor.slice(1);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
