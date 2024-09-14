const express = require("express");
const mongoose = require("mongoose");
const { book_routes } = require("./Routes/Book");
const { user_router } = require("./Routes/user");
const { admin_router } = require("./Routes/Admin");
const { orderRouter } = require('./Routes/order');
const { SendOtp, VerifyOtp } = require('./Controlers/otp');
const dotenv = require('dotenv');
const multers3 = require('multer-s3')

const { upload } = require('./Controlers/Book')

const aws = require('aws-sdk')
const cors = require("cors");
const cookieParse = require('cookie-parser')
const app = express();
app.use(express.json())
app.use(cookieParse())
app.use(cors());

dotenv.config()

// const BUCKET_NAME = process.env.BUCKET_NAME;
// const s3 = new aws.S3();
// const multer = require('multer')

aws.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});

// app.post('/upload', upload.single('file'), async function (req, res, next) {
//     res.send('Successfully Uplodaed' + req.file.location + 'location!')
// })

app.use('/book', book_routes)
app.use('/user', user_router)
app.use('/admin', admin_router)
app.use('/checkout', orderRouter)
app.post('/send-otp', SendOtp)
app.post('/verify-otp', VerifyOtp)


app.listen(process.env.PORT, async () => {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Connected to MongoDB Succefully")
    console.log(`server Started on http//localhost:${process.env.PORT}/`)
}) 
