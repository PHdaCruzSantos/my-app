import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.config.productionTip = false;
Vue.use(VueMaterial);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
