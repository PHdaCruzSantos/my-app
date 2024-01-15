<template>
  <div>
    <h1>Payments</h1>
    <GooglePayVue />
  </div>
</template>

<script>
import GooglePayVue from "@/components/GooglePay/GooglePay.vue";
export default {
  name: "PaymentsView",
  components: {
    GooglePayVue,
  },
};
</script>
