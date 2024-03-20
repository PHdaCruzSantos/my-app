const fetch = require("node-fetch");

// const url = "/api/v3/customers";
const options = {
  method: "POST",
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    access_token:
      "$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAwNzQ3NDE6OiRhYWNoXzI4NzAwMTUwLWI1MjctNDg4MS1iZTg2LWEyMDE2ZTJkNjVjMA==",
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
