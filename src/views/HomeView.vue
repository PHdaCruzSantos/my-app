<template>
  <div class="home">
    <h1>This is a home page</h1>
    <ImgCarousel />
    <CompaniesIconsVue />
    <AsasComp />
  </div>
</template>

<script>
import ImgCarousel from "../components/Carousel/Carousel.vue";
import CompaniesIconsVue from "../components/CompaniesIcons/CompaniesIcons.vue";
import AsasComp from "@/components/Asas/AsasComp.vue";
export default {
  name: "HomeView",
  components: {
    ImgCarousel,
    CompaniesIconsVue,
    AsasComp,
  },
};
</script>
