const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "1c0976898dad41",
      pass: "ad18b993e2d526"
    }
  });

  