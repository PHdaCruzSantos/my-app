<template>
  <div>
    <h1>Twilio 2FA</h1>
    <input
      type="text"
      v-model="phoneNumber"
      placeholder="Enter your phone number"
    />
    <button @click="sendOTP" :disabled="loading">Send OTP</button>
    <input type="text" v-model="otp" placeholder="Enter the OTP" />
    <button :disabled="loading">Verify OTP</button>
  </div>
</template>

<script>
import { sendOTP } from "./index.js";
export default {
  name: "Twilio2FAComponent",
  props: {},
  data: () => ({
    phoneNumber: "",
    otp: sendOTP(),
    loading: false,
  }),
  methods: {
    sendOTP() {
      this.loading = true;
      sendOTP(this.phoneNumber)
        .then(() => {
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
  },
};
</script>
