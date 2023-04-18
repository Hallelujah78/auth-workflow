const sendEmail = require("./sendEmail");

const sendResetPasswordEmail = async ({
  email,
  origin,
  name,
  passwordToken,
}) => {
  const resetPassword = `${origin}/user/reset-password?token=${passwordToken}&email=${email}`;
  const message = `<p>Please click the link below to reset your password,<br>Regards, <br>The Auth Workflow Team<br><a href=${resetPassword}>Reset Password</a></p>`;
  return sendEmail({
    to: email,
    subject: "Reset Password",
    html: `<h4>Hello ${name}</h4>
    ${message}`,
  });
};
module.exports = sendResetPasswordEmail;
