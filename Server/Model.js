const mongoose = require("mongoose")

const Books = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    year: {
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
    }
})

module.exports = mongoose.model('Books', Books)  // books