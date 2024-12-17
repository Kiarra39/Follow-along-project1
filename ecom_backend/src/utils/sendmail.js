const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
//   port: 587,
//   secure: false, // true for port 465, false for other ports
  auth: {
    user: "kieshagibin@gmail.com",
    pass: "bmul xwcl aizq wdeg",
  },
});
module.exports=transporter;