var nodemailer = require('nodemailer');

//sending email
var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'paintmanageremail@gmail.com',
    pass: 'testemail123'
  }
});

var emailUtil = {
  sendEmail: function(data, callBack){
    var emailAddress = data[0].email;
    transporter.sendMail({
      from: 'paintmanageremail@gmail.com',
      to: emailAddress,
      subject: 'hello',
      html: '<b>hello world!</b>' + data,
      text: 'hello world!'
    },callBack
  )}
};

module.exports = emailUtil;
