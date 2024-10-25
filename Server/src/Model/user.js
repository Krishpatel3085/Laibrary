const mongoose = require('mongoose')

const Users = new mongoose.Schema({

    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    username :{
        type:String
    }
})

module.exports = mongoose.model('Users', Users)