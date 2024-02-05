const accountSid = "ACc716cb7e5952ab94ab484f7c33d951ad";
const authToken = "051283d31481b30c0363bb312dd8f44c";
const verifySid = "VAefddafb61cc4fd96d5154a3e1951b00c";
const client = require("twilio")(accountSid, authToken);

export function sendOTP() {
  client.verify.v2
    .services(verifySid)
    .verifications.create({ to: "+5531994103844", channel: "sms" })
    .then((verification) => console.log(verification.status))
    .then(() => {
      const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      readline.question("Please enter the OTP:", (otpCode) => {
        client.verify.v2
          .services(verifySid)
          .verificationChecks.create({ to: "+5531994103844", code: otpCode })
          .then((verification_check) => console.log(verification_check.status))
          .then(() => readline.close());
      });
    });
}
