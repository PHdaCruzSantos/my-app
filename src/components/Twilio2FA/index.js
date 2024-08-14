const accountSid = "ACC_SID";
const authToken = "AUTH_TOKEN";
const verifySid = "VERIFY_SID";
const client = require("twilio")(accountSid, authToken);

export function sendOTP() {
  client.verify.v2
    .services(verifySid)
    .verifications.create({ to: "+55...", channel: "sms" })
    .then((verification) => console.log(verification.status))
    .then(() => {
      const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      readline.question("Please enter the OTP:", (otpCode) => {
        client.verify.v2
          .services(verifySid)
          .verificationChecks.create({ to: "+55...", code: otpCode })
          .then((verification_check) => console.log(verification_check.status))
          .then(() => readline.close());
      });
    });
}
