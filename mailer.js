const nodemailer = require("nodemailer");
const cred = require("./userCredAPI.json");
function mailerd(subject,bodytext,bodyhtml,email){
    let transporter = nodemailer.createTransport({
        service: cred.service,
        auth: {
            user: cred.user,
            pass: cred.pass,
        },
    });

    var sendmail = {
        from: cred.user,
        to: email,
        subject: subject,
        text: bodytext,
        html: bodyhtml
    };
    transporter.sendMail(sendmail,function(err, result) {
        if(err)console.log("get error to send email "+email)
        else console.log("email send to "+email);
    }) 
}
module.exports = mailerd;

