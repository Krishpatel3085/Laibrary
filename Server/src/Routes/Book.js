const express = require("express");
const {
  deleteData,
  addData,
  updateData,
  upload,
  getData,
  getSingelData
} = require("../Controlers/Book");

const book_routes = express.Router();

book_routes.use("/upload", express.static("upload"));

book_routes.get("/getbook", getData);
book_routes.get("/get1book/:id", getSingelData);
book_routes.post("/createbook", upload.single("url"), addData);
book_routes.put("/updatebook/:id", upload.single("url"), updateData);
book_routes.delete("/delete/:id", deleteData);

module.exports = { book_routes };
