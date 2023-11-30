const nodemailer = require('nodemailer');

const SendEmailUtility= async (EmailTo, EmailText, EmailSubject) => {

    let transporter = nodemailer.createTransport({
        host: 'smtp.elasticemail.com',
        port: 2525,
        secure: false,
        auth: {
            user: "mehedihasan49265@gmail.com",
            pass: 'F4552D2B4F6F8F86D0B8AB9C22B66439FF58'
        },tls: {
            rejectUnauthorized: false
        },
    });


    let mailOptions = {
        from: 'mehedihasan49265@gmail.com',
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText
    };

    return  await transporter.sendMail(mailOptions)

}
module.exports=SendEmailUtility