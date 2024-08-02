const express = require('express')
const { getUSer, loginUser, createUser} = require ("../Controlers/user")

const user_router = express.Router()

user_router.get('/get', getUSer)
user_router.post('/register', createUser)
user_router.get('/login', loginUser)

module.exports = {user_router};