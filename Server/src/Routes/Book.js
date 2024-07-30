const express = require("express");
const {
  deleteData,
  addData,
  updateData,
  upload,
  getData,
} = require("../Controlers/Book");

const book_routes = express.Router();



book_routes.use("/upload", express.static("upload"));

book_routes.get("/", getData);
book_routes.post("/", upload.single("url"), addData);
book_routes.put("/:id", upload.single("url"), updateData);
book_routes.delete("/:id", deleteData);

module.exports = { book_routes };
