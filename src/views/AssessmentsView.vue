<template>
  <div class="assessments">
    <h1>Avaliações</h1>
    <AvaliacoesComponent />
  </div>
</template>

<script>
import AvaliacoesComponent from "../components/Assessments/Assessments.vue";
export default {
  name: "AssessmentsView",
  components: {
    AvaliacoesComponent,
  },
};
</script>
