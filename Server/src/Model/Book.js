const mongoose = require("mongoose")

const Books = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    price: {
        type: Number
    },
    price2: {
        type: Number
    },
    description: {
        type: String
    },
    isbin: {
        type: Number
    },
    language: {
        type: String
    },
    url: {
        type: String
    },
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users_Admin'
    },
},
    {
        timestamps: true,
    })

module.exports = mongoose.model('Books', Books)  