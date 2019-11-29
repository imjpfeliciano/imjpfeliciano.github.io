import Vue from "vue";
import vueSmoothScroll from "vue2-smooth-scroll";
import App from "./App.vue";
// import router from './router'

Vue.config.productionTip = false;
Vue.use(vueSmoothScroll);

new Vue({
  render: h => h(App)
}).$mount("#app");
