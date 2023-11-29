const nodemailer = require('nodemailer');

const SendEmailUtility= async (EmailTo, EmailText, EmailSubject) => {

    let transporter = nodemailer.createTransport({
        host: 'sandbox.smtp.mailtrap.io',
        port: 2525,
        secure: false,
        auth: {
            user: "0ad39c0364a058",
            pass: '********e9c1'
        },tls: {
            rejectUnauthorized: false
        },
    });


    let mailOptions = {
        from: 'mehedihasan914199@gmail.com',
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText
    };

    return  await transporter.sendMail(mailOptions)

}


module.exports = SendEmailUtility;