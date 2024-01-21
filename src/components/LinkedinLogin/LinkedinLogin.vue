<template>
  <div>
    <button @click="login">Login with LinkedIn</button>
  </div>
</template>

<script>
import passport from "passport";
import LinkedInStrategy from "passport-linkedin-oauth2";

export default {
  name: "LinkedInLogin",
  props: {
    appId: {
      type: String,
      required: true,
    },
    clientSecret: {
      type: String,
      required: true,
    },
  },
  mounted() {
    passport.use(
      new LinkedInStrategy({
        clientID: this.appId,
        clientSecret: this.clientSecret,
        callbackURL: window.location.origin + "/api/auth/linkedin/callback",
      })
    );

    passport.on("login", (req, token, user) => {
      req.session.passport.user = user;
    });
  },
  methods: {
    login() {
      passport
        .authenticate("linkedin", {
          scope: ["r_liteprofile", "r_emailaddress"],
        })
        .then(
          // eslint-disable-next-line no-unused-vars
          (profile) => {
            this.$router.push({ name: "home" });
          },
          (err) => {
            console.log(err);
          }
        );
    },
  },
};
</script>
