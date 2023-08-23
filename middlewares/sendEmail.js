
const sgMail = require("@sendgrid/mail");
require("dotenv").config();
const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = {
    ...data,
    from: "hannabl1988@gmail.com",
  };

  await sgMail
    .send(email)
    .then(() => console.log("Email send successfully"))
    .catch((err) => console.log(err.message));
  return true;
};

module.exports = { sendEmail };












// const nodemailer = require('nodemailer');

// require('dotenv').config();

// const config = {
//   // host: 'smtp.meta.ua',
//   // port: 465,
//   // secure: true,
//   // auth: {
//   //   user: 'goitnodejs@meta.ua',
//   //   pass: process.env.PASSWORD,

//     host: 'smtp.ethereal.email',
//     port: 587,
//     secure: false,
//     auth: {
//         user: 'arno.farrell94@ethereal.email',
//         pass: 'rJECmYp5kS48sGYVce'
//     }

// };

// const transporter = nodemailer.createTransport(config);
// const emailOptions = {
//   from: 'smtp.ethereal.email',
//   to: 'arno.farrell94@ethereal.email',
//   subject: 'Nodemailer test',
//   text: 'Привет. Мы тестируем отправку писем!',
// };

// transporter
//   .sendMail(emailOptions)
//   .then(info => console.log(info))
//   .catch(err => console.log(err));