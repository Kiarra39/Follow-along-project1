const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  auth: {
    user: 'kieshagibin@gmail.com',
    pass: 'nuxl sjhn bmwy qfmu',
  },
});

module.exports = transporter;
