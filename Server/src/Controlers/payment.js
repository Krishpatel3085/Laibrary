
const { createRazorpayInstance } = require("../config/razorpay");
const crypto = require("crypto");
const dotenv = require('dotenv');
dotenv.config();

const createPayorder = async (req, res) => {
    const { amount } = req.body;

    if (!amount) {
        return res.status(400).json({
            success: false,
            message: "Missing required fields"
        });
    }

    const razorpayInstance = createRazorpayInstance();
    const options = {
        amount: amount * 100, // Convert to smallest currency unit
        currency: "INR",
        receipt: `receipt_order_${Date.now()}`,
    };

    try {
        const response = await razorpayInstance.orders.create(options);
        return res.status(200).json({
            success: true,
            data: response
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const verifyPayment = async (req, res) => {
    const { order_id, payment_id, signature } = req.body;

    const secret = process.env.RAZORPAY_KEY_SECRET;

    // CREATE HMAC OBJECT

    const hmac = crypto.createHmac("sha256", secret);

    hmac.update(order_id + ": " + payment_id);

    const generatedSignature = hmac.digest("hex");
    if (generatedSignature === signature) {
        return res.status(200).json({
            success: true,
            message: "Payment verified successfully"
        });
    } else {
        return res.status(400).json({
            success: false,
            message: "payment rejected",
        });
    };
}

module.exports = { verifyPayment, createPayorder }