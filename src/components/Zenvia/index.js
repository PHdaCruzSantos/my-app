import TotalVoice from "totalvoice-node";
const client = new TotalVoice("408b04c4ed3a427bdeb6a2fa6f1964a2");
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
