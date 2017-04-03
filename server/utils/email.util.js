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
      html:  emailFormat(data[0]),
      text: 'hello world!'
    },callBack
  )}
};


var emailFormat = function(data){
  var html = `<div>
  <table>
  <tbody>
  <tr><td>Quote Date: ` + data.date + `</td></tr>
  <tr><td>Task 1: ` + data.task_1 + `</td></tr>
  <tr><td>Task 2: ` + data.task_2 +`</td></tr>
  <tr><td>Materials: ` + data.materials + `</td></tr>
  <tr><td>Labor Cost: ` + data.tasks_cost +`</td></tr>
  <tr><td>Materials Cost: ` + data.materials_cost +`</td></tr>
  <tr><td>Total Cost: ` + data.total_cost +`</td></tr>
  </tbody>
  </table>
  </div>`;
  return html;
}


module.exports = emailUtil;
