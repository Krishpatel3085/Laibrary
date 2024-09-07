const { sendEmail } = require('../config/otp');
const { OTP_DATA } = require('../config/otpTemplate');

const otpStore = {};  // Temporary store for OTPs

// Send OTP
const SendOtp = async (req, res) => {
    try {
        const to = req.body.email;
        if (!to) {
            return res.status(400).json({ msg: "Email is required" });
        }

        const subject = OTP_DATA.OTP_SUBJECT;
        const msg = OTP_DATA.OTP_TEXT;
        const otp = Math.floor(100000 + Math.random() * 900000).toString(); 
        const html = `${OTP_DATA.OTP_HTML_1}${otp}${OTP_DATA.OTP_HTML_2}`;

        otpStore[to] = otp;  // Store OTP as string
        await sendEmail(to, subject, msg, html);
        res.json({ msg: "OTP sent" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error" });
    }
};

// Verify OTP
const VerifyOtp = (req, res) => {
    const { email, otp } = req.body;

    if (!email || !otp) {
        return res.status(400).json({ msg: "Email and OTP are required" });
    }

    const storedOtp = otpStore[email];

    if (storedOtp && storedOtp === otp.toString()) {  // Compare as strings
        delete otpStore[email];  // Remove OTP after successful verification
        res.json({ msg: "OTP verified successfully" });
    } else {
        res.status(400).json({ msg: "Invalid OTP" });
    }
};

module.exports = { SendOtp, VerifyOtp };
