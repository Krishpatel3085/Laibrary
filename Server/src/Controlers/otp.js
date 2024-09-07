
const { sendEmail } = require('../config/otp');
const { OTP_DATA } = require('../config/otpTemplate');

const SendOtp = async (req, res) => {
    try {
        const to = req.body.email;

        if (!to) {
            return res.status(400).json({ msg: "Email is required" });
        }

        const subject = OTP_DATA.OTP_SUBJECT;
        let otp = Math.round(Math.random() * 10000);
        const html = `${OTP_DATA.OTP_HTML_1}${otp}${OTP_DATA.OTP_HTML_2}`;
        const msg = OTP_DATA.OTP_TEXT;

        // Send email
        await sendEmail(to, subject, html, msg);

        res.json({
            msg: "OTP sent",
            otp: otp
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error" });
    }

}

module.exports = { SendOtp }