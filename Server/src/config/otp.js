const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config()

// Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Send Email function
const sendEmail = async (to, subject, msg, html) => {
    console.log("Sending email to:", to);
    try {
        await transporter.sendMail({
            from: "f388krish@gmail.com",
            to: to,
            subject: subject,
            text: msg,   
            html: html
        });

        console.log("Email sent successfully");
        
    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error("Failed to send email");
    }
}

module.exports = { sendEmail };
