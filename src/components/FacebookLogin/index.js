/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */
import facebookLogin from "./FacebookLogin.vue";
export const facebookLoginPlugin = {
  install: function (Vue, options) {
    Vue.component(facebookLogin.name, facebookLogin);
  },
};
export default facebookLogin;

/* global window, FB, document */

export function loadFbSdk(appId, version) {
  return new Promise((resolve) => {
    window.fbAsyncInit = function () {
      // eslint-disable-line func-names
      FB.init({
        appId,
        xfbml: false,
        version,
        cookie: true,
      });
      FB.AppEvents.logPageView();
      resolve("SDK Loaded!");
    };
    (function (d, s, id) {
      // eslint-disable-line func-names
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      const js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/pt-BR/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  });
}

export function getFbLoginStatus() {
  return new Promise((resolve) => {
    window.FB.getLoginStatus((responseStatus) => {
      resolve(responseStatus);
    });
  });
}

export function fbLogin(options) {
  return new Promise((resolve) => {
    window.FB.login((response) => resolve(response, response.name), options);
  });
}
export function fbLogout() {
  return new Promise((resolve) => {
    window.FB.logout((response) => resolve(response));
  });
}
