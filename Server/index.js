const express = require("express");
const mongoose = require("mongoose");
const { book_routes } = require("./src/Routes/Book");
const { user_router } = require("./src/Routes/user");
const cors = require("cors");
const dotenv = require('dotenv');
const cookieParse = require('cookie-parser')

const app = express();
dotenv.config()
app.use(express.json())
app.use(cookieParse())
app.use(cors());


app.use('/book', book_routes)
app.use('/user', user_router)


app.get('/set', (req, res) => {

    const time = "data with time 2"
    res.cookie('data2', time, { maxAge: 10000 });

    res.json({
        msg: "my server is running"
    })
})

app.get('/get', (req, res) => {
    res.json({
        msg: req.cookies
    })
})


app.listen(process.env.PORT, async () => {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Connected to MongoDB Succefully")
    console.log(`server Started on http//localhost:${process.env.PORT}/`)
}) 
