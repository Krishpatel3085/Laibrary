
const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    orderId: { type: String, required: true, unique: true },
    customerName: { type: String, required: true },
    customerNumber: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    paymentStatus: { type: String, required: true },
    orderDate: { type: Date, default: Date.now },
    amount: { type: Number, required: true },
    adress: { type: String, required: true },
    items: [
        {
            itemName: { type: String, required: true },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true }
        }
    ],
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
});

const Address = mongoose.model("Address", addressSchema);
module.exports = { Address };
