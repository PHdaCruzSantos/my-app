<template>
  <div>
    <h1>Payments</h1>
    <GooglePayVue />
    <AsasComp />
  </div>
</template>

<script>
import GooglePayVue from "@/components/GooglePay/GooglePay.vue";
import AsasComp from "@/components/Asas/AsasComp.vue";
export default {
  name: "PaymentsView",
  components: {
    GooglePayVue,
    AsasComp,
  },
};
</script>
