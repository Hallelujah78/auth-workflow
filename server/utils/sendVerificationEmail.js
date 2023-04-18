const sendEmail = require("./sendEmail");

const sendVerificationEmail = async ({
  email,
  origin,
  name,
  verificationToken,
}) => {
  const verifyEmail = `${origin}/user/verify-email?token=${verificationToken}&email=${email}`;
  const message = `Please click the button below to verify your account,<br>Regards, <br>The Auth Workflow Team<br><a href=${verifyEmail}>verify email</a></p>`;
  return sendEmail({
    to: email,
    subject: "Email Verification",
    html: `<h4>Hello ${name}</h4>
    ${message}`,
  });
};

module.exports = sendVerificationEmail;
