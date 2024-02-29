import fetch from "node-fetch";

const url = "https://sandbox.asaas.com/api/v3/customers";
// const options = {
//   method: "POST",
//   headers: {
//     accept: "application/json",
//     "content-type": "application/json",
//     access_token:
//       "$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAwNzQ3NDE6OiRhYWNoXzczMjgzNzhjLTVhYmItNGNjOS1iYzQ2LWY2N2UzNjg4YzVmNg==",
//   },
// };

// fetch(url, options)
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.error("error:" + err));

const createCustomer = async (customer) => {
  const options = {
    method: "POST",
    mode: "no-cors",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      access_token:
        "$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAwNzQ3NDE6OiRhYWNoXzczMjgzNzhjLTVhYmItNGNjOS1iYzQ2LWY2N2UzNjg4YzVmNg==",
    },
    body: JSON.stringify(customer),
  };
  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));
};

export default createCustomer;
