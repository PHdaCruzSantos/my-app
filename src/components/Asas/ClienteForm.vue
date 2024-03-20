<script>
import newCostumer from "./index.js";

export default {
  name: "ClienteForm",
  data() {
    return {
      newCostumer: newCostumer,
    };
  },
  methods: {
    addCostumer() {
      this.newCostumer();
    },
  },
};
</script>

<template>
  <div>
    <button @click="addCostumer">Adicionar</button>
  </div>
</template>
