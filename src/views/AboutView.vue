<template>
  <div class="About">
    <h1>This is an about page</h1>
    <AboutInfos />
    <MapaComp />
  </div>
</template>

<script>
import AboutInfos from "../components/AboutComp/AboutComp.vue";
import MapaComp from "../components/MapsComp/Maps.vue";
export default {
  name: "AboutView",
  components: {
    AboutInfos,
    MapaComp,
  },
};
</script>
