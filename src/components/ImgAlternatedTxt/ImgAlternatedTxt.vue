<template>
  <div class="container">
    <div class="row">
      <div
        v-for="(service, index) in getImgAlternatedTxt()"
        :key="index"
        class="col-md-12"
      >
        <div class="row align-items-center">
          <div
            :class="[
              { 'order-md-1': index % 2 === 0 },
              { 'order-md-2': index % 2 === 1 },
              'col-md-6',
              'mb-3',
            ]"
          >
            <img :src="service.image" alt="Service Image" class="img-fluid" />
          </div>
          <div
            :class="[
              { 'order-md-2': index % 2 === 0 },
              { 'order-md-1': index % 2 === 1 },
              'col-md-6',
              'mb-3',
            ]"
          >
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { obterServices } from "./index.js";
export default {
  name: "ImgAlternatedTxt",
  data: () => ({
    services: obterServices(),
  }),
  methods: {
    obterServices() {
      return obterServices().map((item, index) => ({
        title: item.title,
        description: item.description,
        image: item.image,
        key: index,
      }));
    },
    getImgAlternatedTxt() {
      return this.obterServices();
    },
  },
};
</script>
