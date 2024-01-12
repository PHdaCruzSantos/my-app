<template>
  <div class="container mt-5 border border border-primary p-0 border-3">
    <gmap-map
      :center="center"
      :zoom="zoom"
      map-type-id="terrain"
      style="width: 100%; height: 400px"
      zoom-control="true"
      scale-control="true"
    >
      <gmap-marker :position="ponto" :label="ponto.label" />
    </gmap-map>
  </div>
</template>
<script>
import { gmapApi } from "vue2-google-maps";
// import { obterMapInfo } from "./index.js";
export default {
  name: "MapsComp",
  data() {
    return {
      center: { lat: -23.5505, lng: -46.6333 },
      zoom: 12,
      ponto: {
        lat: -23.5505,
        lng: -46.6333,
        label: "São Paulo",
      },
    };
  },
  methods: {
    initMap() {
      this.map = new gmapApi.Map(this.$refs.map, {
        center: this.center,
        zoom: this.zoom,
      });
    },
  },
  mounted() {
    this.initMap();
  },
};
</script>
