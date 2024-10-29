const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

    title: { type: String}, 
    author: { type: String}, 
    quantity: { type: Number ,default:1 }, 
    price: { type: Number }, 
    imageUrl : {type:String},
    username :{ type :String},
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    totalAmount: { type: Number}, // Added validation for total amount
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Export the Order model
module.exports = mongoose.model('Order', orderSchema);