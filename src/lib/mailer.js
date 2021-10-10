const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2ae863c7e54f58",
    pass: "66abc7fdfc6fd6"
  }
});

