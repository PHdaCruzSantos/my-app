const fetch = require("node-fetch");
const options = {
  method: "POST",
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    access_token: "API_KEY",
  },
  body: JSON.stringify({
    name: "Nome do Cliente",
    cpfCnpj: "24971563792",
    email: "email.cliente@gmail.com",
  }),
};

const newCostumer = () => {
  fetch("https://sandbox.asaas.com/api/v3/customers", options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));
};

export default newCostumer;
