import Vue from 'vue';
import vueSmoothScroll from 'vue2-smooth-scroll';
import App from './App';
// import router from './router'
import './assets/styles/index.scss';

Vue.config.productionTip = false;
Vue.use(vueSmoothScroll);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
