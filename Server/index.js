const express = require("express");
const mongoose = require("mongoose");
const { book_routes } = require("./src/Routes/Book");

const app = express();
app.use(express.json())
app.use('/', book_routes)

app.listen(8085, async () => {
    await mongoose.connect("mongodb://localhost:27017/Book-Details")
    console.log("Connected to MongoDB Succefully")
    console.log("server Started on http://localhost:8085/")
}) 
