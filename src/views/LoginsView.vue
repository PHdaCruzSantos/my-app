<template>
  <div class="login">
    <h1>This is a login page</h1>
    <GoogleLogin />
  </div>
</template>

<script>
import GoogleLogin from "@/components/GoogleLogin/GoogleLogin.vue";

export default {
  name: "LoginView",
  components: {
    GoogleLogin,
  },
};
</script>
