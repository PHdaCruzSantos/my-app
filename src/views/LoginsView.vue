<template>
  <div class="login">
    <h1>This is a login page</h1>
    <b-card>
      <b-row>
        <b-col cols="12" class="mt-3 mb-3">
          <GoogleLogin />
        </b-col>
        <b-col cols="12" class="mt-3 mb-3">
          <FacebookLogin :appId="1409274179964634" />
        </b-col>
        <b-col cols="12" class="mt-3 mb-3">
          <LinkedinLogin
            appId="77irql6z6ncp0r"
            :clientSecret="CMmCU6RDojivYKLO"
          />
        </b-col>
        <b-col cols="12" class="mt-3 mb-3">
          <zenvia />
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import GoogleLogin from "@/components/GoogleLogin/GoogleLogin.vue";
import FacebookLogin from "@/components/FacebookLogin/FacebookLogin.vue";
import Zenvia from "@/components/Zenvia/Zenvia.vue";
export default {
  name: "LoginView",
  components: {
    GoogleLogin,
    FacebookLogin,
    Zenvia,
  },
};
</script>
