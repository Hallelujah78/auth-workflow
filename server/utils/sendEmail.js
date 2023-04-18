const nodemailer = require("nodemailer");
const nodemailerConfig = require("./nodemailerConfig");

const sendEmail = async ({ to, subject, html }) => {
  const transporter = nodemailer.createTransport(nodemailerConfig);
  const message = {
    from: "",
    to,
    subject,
    html,
  };
  return transporter.sendMail(message);
};

module.exports = sendEmail;
