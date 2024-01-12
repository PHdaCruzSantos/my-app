<template>
  <div class="container">
    <h1>Avaliações</h1>
    <material-list :items="avaliacoes">
      <template #item="{ item }">
        <li>
          <h2>{{ item.authorName }}</h2>
          <p>{{ item.rating }} estrelas</p>
          <p>{{ item.text }}</p>
        </li>
      </template>
    </material-list>
  </div>
</template>

<script>
import { getAssessments } from "./index.js";
export default {
  name: "AvaliacoesComponent",
  data: () => ({
    avaliacoes: getAssessments(),
  }),
  mounted() {
    this.getAssessments();
  },
  methods: {
    getAssessments() {
      return getAssessments().map((item, index) => ({
        authorName: item.authorName,
        rating: item.rating,
        text: item.text,
        key: index,
      }));
    },
  },
};
</script>
