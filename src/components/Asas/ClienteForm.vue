<template>
  <form @submit.prevent="createCustomer">
    <md-field>
      <label>Nome</label>
      <md-input v-model="cliente.nome" required></md-input>
    </md-field>
    <md-field>
      <label>Email</label>
      <md-input label="Email" v-model="cliente.email" required></md-input>
    </md-field>
    <md-field>
      <label>CPF/CNPJ</label>
      <md-input v-model="cliente.cpfCnpj" required></md-input>
    </md-field>
    <md-button type="submit">Salvar</md-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      cliente: {
        nome: "PH",
        email: "p.h@gmail.com",
        cpfCnpj: "00100200369",
      },
      access_token:
        "$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAwNzQ3NDE6OiRhYWNoXzczMjgzNzhjLTVhYmItNGNjOS1iYzQ2LWY2N2UzNjg4YzVmNg==",
      url: "https://sandbox.asaas.com/api/v3/customers",
    };
  },
  methods: {
    onsubmit() {
      this.createCustomer(this.cliente);
    },
    createCustomer() {
      const options = {
        method: "POST",
        mode: "no-cors", // no-cors, *cors, same-origin
        headers: {
          "Content-Type": "application/json",
          access_token: this.access_token,
        },
        body: JSON.stringify({
          name: this.cliente.nome,
          email: this.cliente.email,
          cpfCnpj: this.cliente.cpfCnpj,
        }),
        withCredentials: true,
      };
      const response = fetch(this.url, options)
        .then(async (response) => {
          const data = await response.text();
          const json = JSON.parse(data);
          console.log("json:", json);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      console.log("response: ", response);
    },
  },
};
</script>
