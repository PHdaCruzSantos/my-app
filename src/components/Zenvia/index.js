import TotalVoice from "totalvoice-node";
const client = new TotalVoice("API_KEY");
const phoneNumber = "4002-8922";
export const send = () => {
  client.verificacao
    .enviar(phoneNumber, "ZenAPI de Voz")
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log("Erro: ", error);
    });
};
