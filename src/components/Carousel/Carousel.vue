<template>
  <md-app-conten class="bg-secondary --bs-secondary-bg">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="2000"
      controls
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      class="bg-secondary --bs-secondary-bg shadow p-3 mb-5 bg-body-tertiary rounded"
    >
      <b-carousel-slide
        v-for="(i, k) in getImages()"
        :key="k"
        :img-src="i.src"
        :img-alt="i.altText"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        caption="Nulla vitae elit libero, a pharetra augue mollis interdum."
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
      </b-carousel-slide>
    </b-carousel>
  </md-app-conten>
</template>

<script>
import { obterImg } from "./index.js";
export default {
  name: "ImgCarousel",
  data: () => ({
    img: obterImg(),
    slide: 0,
    sliding: null,
  }),
  methods: {
    obterImg() {
      return obterImg().map((item, index) => ({
        src: item.src,
        altText: item.altText,
        key: index,
      }));
    },
    getImages() {
      return this.obterImg();
    },
    onSlideStart(slide) {
      this.sliding = true;
      this.slide = slide;
    },
    onSlideEnd(slide) {
      this.sliding = false;
      this.slide = slide;
    },
  },
};
</script>
