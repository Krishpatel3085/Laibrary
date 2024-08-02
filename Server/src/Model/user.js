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
    // gender :{
    //     type:String,
    //     enum:['Male', 'Female', 'Other']
    // }
})

module.exports = mongoose.model('Users', Users)