const express = require('express')
const { getUSer, loginUser, createUser, get1USer } = require("../Controlers/user")

const user_router = express.Router()

user_router.get('/get', getUSer)
user_router.get('/get1/:id', get1USer)
user_router.post('/register', createUser)
user_router.post('/login', loginUser)

module.exports = { user_router };