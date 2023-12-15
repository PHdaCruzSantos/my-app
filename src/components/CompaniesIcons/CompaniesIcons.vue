<template>
  <div
    class="container-fluid p-3 bg-primary d-flex flex-column justify-content-center shadow p-3 mb-5 bg-body-tertiary rounded"
  >
    <h1 class="text-center mb-3">Empresas Parceiras</h1>
    <div class="d-flex justify-content-around">
      <b-skeleton
        v-for="index in AvatarL"
        :key="index"
        type="avatar"
      ></b-skeleton>
    </div>
  </div>
</template>

<script>
// import { obterIcons } from "./index.js";
export default {
  name: "CompanySlider",
  data: () => ({
    AvatarL: 10,
  }),
};
</script>
