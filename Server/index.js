const express = require("express");
const mongoose = require("mongoose");
const { book_routes } = require("./src/Routes/Book");
const { user_router } = require("./src/Routes/user");
const { admin_router } = require("./src/Routes/Admin");
const { orderRouter } = require('./src/Routes/order');
const { SendOtp, VerifyOtp } = require('./src/Controlers/otp');
const path=require("path");
const PORT = 8085;
MONGO_URL = 'mongodb+srv://f388krish:xkhbo697@lms-app.zbqpg.mongodb.net/Book-Detail'

const cors = require("cors");
const cookieParse = require('cookie-parser')

const app = express();
app.use(express.json())
app.use(cookieParse())
app.use(cors());

const _dirname=path.dirname("")
const buildpath = path.join(_dirname,"../public/build")
app.use(express.static(buildpath));

app.use('/book', book_routes)
app.use('/user', user_router)
app.use('/admin', admin_router)
app.use('/checkout', orderRouter)
app.post('/send-otp', SendOtp)
app.post('/verify-otp', VerifyOtp)


app.listen(PORT, async () => {
    await mongoose.connect(MONGO_URL)
    console.log("Connected to MongoDB Succefully")
    console.log(`server Started on http//localhost:${PORT}/`)
}) 
