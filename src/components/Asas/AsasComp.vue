<template>
  <div>
    <h1>Asaas</h1>
    <h2>Criar Novo cliente</h2>
    <ClienteForm />
  </div>
</template>

<script>
import ClienteForm from "./ClienteForm.vue";

export default {
  name: "AsasComp",
  components: {
    ClienteForm,
  },
};
</script>
