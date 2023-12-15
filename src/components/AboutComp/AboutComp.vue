<template>
  <div class="about">
    <b-card v-if="AboutInfos">
      <b-row>
        <b-col cols="12" class="mt-3 mb-3">
          <b-skeleton-img no-aspect height="150px"></b-skeleton-img>
        </b-col>
        <b-skeleton animation="throb" width="85%"></b-skeleton>
        <b-skeleton animation="throb" width="55%"></b-skeleton>
        <b-skeleton animation="throb" width="70%"></b-skeleton>
        <b-skeleton animation="throb" width="50%"></b-skeleton>
        <b-skeleton animation="throb" width="70%"></b-skeleton>
      </b-row>
    </b-card>
    <b-card v-else>
      <b-row>
        <b-col cols="12" class="mt-3 mb-3">
          <img :src="AboutInfos.src" :alt="AboutInfos.altText" />
        </b-col>
        <b-col cols="12" class="mt-3 mb-3">
          <p>{{ AboutInfos.txt }}</p>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { AboutComp } from "./index.js";
export default {
  name: "AboutInfos",
  data: () => ({
    AboutInfos: AboutComp(),
  }),
  methods: {
    AboutComp() {
      return AboutComp().map((item, index) => ({
        src: item.src,
        altText: item.altText,
        txt: item.txt,
        key: index,
      }));
    },
    getImages() {
      return this.AboutComp();
    },
  },
};
</script>
