const express = require("express");
const mongoose = require("mongoose");
const { book_routes } = require("./src/Routes/Book");
const cors = require("cors");
const dotenv = require('dotenv');

const app = express();
dotenv.config()
app.use(express.json())
app.use(cors());
app.use('/', book_routes)

app.listen(process.env.PORT, async () => {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Connected to MongoDB Succefully")
    console.log(`server Started on http//localhost:${process.env.PORT}/`)
}) 
