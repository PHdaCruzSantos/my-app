<template>
  <div class="services">
    <h1 class="text-center m-3">This is a services page</h1>
    <ImgAlternatedTxt />
  </div>
</template>

<script>
import ImgAlternatedTxt from "../components/ImgAlternatedTxt/ImgAlternatedTxt.vue";

export default {
  name: "ServicesView",
  components: {
    ImgAlternatedTxt,
  },
};
</script>
