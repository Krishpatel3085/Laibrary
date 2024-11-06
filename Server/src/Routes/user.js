const express = require('express')
const { getUSer, loginUser, createUser, get1USer, deleteUser } = require("../Controlers/user")
const { authenticateToken } = require("../Middlewear/authToken")

const user_router = express.Router()

user_router.get('/get', getUSer)
user_router.get('/get1/:id', get1USer)
user_router.post('/register', createUser)
user_router.post('/login', loginUser)
user_router.delete('/deleteUser/:id',authenticateToken, deleteUser)

module.exports = { user_router };