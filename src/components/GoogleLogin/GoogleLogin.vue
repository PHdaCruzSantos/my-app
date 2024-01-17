<template>
  <div class="container">
    <h4>Login com o Google, isLoged ? {{ isLoged }}</h4>
    <div class="d-flex">
      <button class="btn btn-primary" @click="login()">
        Login com o Google
      </button>
      <button class="btn btn-danger" @click="logOut()">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoogleLogin",
  data() {
    return {
      isLogin: false,
    };
  },
  methods: {
    async logOut() {
      try {
        const result = await this.$gAuth.signOut();
        console.log(`result`, result);
      } catch (error) {
        console.log(`error`, error);
      }
    },
    async login() {
      try {
        const googleUser = await this.$gAuth.signIn();
        console.log("googleUser", googleUser);
        console.log("getId", googleUser.getId());
        console.log("getBaseProfile", googleUser.getBasicProfile());
        console.log("getAuthResponse", googleUser.getAuthResponse());
        console.log(
          "getAuthResponse$G",
          this.$gAuth.GoogleAuth.currentUser.get().getAuthResponse()
        );
        this.isLogin = this.$gAuth.isAuthorized;
      } catch (error) {
        console.log(`error`, error);
      }
    },
  },
};
</script>
