<template>
  <div class="About">
    <h1>This is an about page</h1>
    <AboutInfos />
  </div>
</template>

<script>
import AboutInfos from "../components/AboutComp/AboutComp.vue";
export default {
  name: "AboutView",
  components: {
    AboutInfos,
  },
};
</script>
