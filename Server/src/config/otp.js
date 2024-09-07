const nodemailer = require('nodemailer');

// Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "f388krish@gmail.com",
        pass: "xxdo jsxl yrad beyc"
    }
});

// Send Email function
function sendEmail(to, subject, msg, html) {
    console.log("Sending email to:", to);
    transporter.sendMail({
        from: "f388krish@gmail.com",
        to: to,
        subject: subject,
        text: msg,
        html: html
    },
     (error) => {
        console.error("Error sending email:", error);

    });
}

module.exports = { sendEmail };
