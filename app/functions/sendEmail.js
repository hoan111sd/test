var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
            user: 'ltudm.uit@gmail.com',
            pass: 'Highbrigde'
    }
});


const sendEmail = function(receivers, subject, content) {
    const mailOptions = {
        from: 'ltudm@gmail.com', 
        to: 'tadinhnui1@gmail.com',
        subject: subject,
        html: content
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if(err) {
            return false;
        } 
        return true;
     });
}

exports.module = sendEmail;
