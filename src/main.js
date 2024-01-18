import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import * as VueGoogleMaps from "vue2-google-maps";
import GAuth from "vue-google-oauth2";
import facebookLogin from "facebook-login-vuejs";

Vue.config.productionTip = false;

Vue.component("my-component", {
  components: {
    facebookLogin,
  },
});
Vue.use(GAuth, {
  clientId:
    "58275547174-25rua383hclkjfmfufv88j81eh3hsfr4.apps.googleusercontent.com",
  scope: "profile email",
  prompt: "consent",
  access_type: "offline",
});
Vue.use(VueMaterial);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyA2l2IHv08TooqNTD-HILMdhBYbjyQKkfc",
    libraries: "places", // necessary for places input
  },
});

new Vue({
  router,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
