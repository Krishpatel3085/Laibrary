const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

    title: { type: String},  // Added required validation
    author: { type: String}, // Added required validation
    quantity: { type: Number ,default:1 }, // Added validation for quantity
    price: { type: Number }, // Added validation for price
    imageUrl : {type:String},
    username :{ type :String},
    totalAmount: { type: Number}, // Added validation for total amount
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Export the Order model
module.exports = mongoose.model('Order', orderSchema);