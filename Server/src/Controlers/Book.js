const express = require("express");
const Books = require("../Model/Book");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 10000);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage });

const app = express();
app.use(express.json());

app.use(cors());
app.use("/upload", express.static("upload"));

// Data Get
const getData = async (req, res) => {
  try {
    const data = await Books.find();
    res.json({ data });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Data Create
const addData = async (req, res) => {
  try {
    const { title, author, year, description, isbin, language } = req.body;
    const url = req.file ? req.file.filename : "";
    await Books.create({
      title,
      author,
      year,
      description,
      isbin,
      language,
      url,
    });
    res.json({ Msg: "Post Successfully" });
  } catch (error) {
    console.error("Error posting data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Data Update
const updateData = async (req, res) => {
  const id = req.params["id"];
  const { title, author, year, description, isbin, language } = req.body;
  let url;

  try {
    if (req.file) {
      const book = await Books.findById(id);
      if (book.url) {
        const oldImgPath = path.join(__dirname, "upload", book.url);
        fs.unlink(oldImgPath, (err) => {
          if (err) console.error(`Error removing old file: ${err}`);
        });
      }
      url = req.file.filename;
    } else {
      const book = await Books.findById(id);
      url = book.url;
    }

    const updatedBook = await Books.findByIdAndUpdate(
      id,
      { title, author, year, description, isbin, language, url },
      { new: true }
    );

    res.json({ Msg: "Put Successfully", updatedBook });
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Data Delete
const deleteData = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Books.findOne({ _id: id });
    if (!book) {
      return res.status(404).json({ Msg: "Book not found" });
    }
    const imgPath = path.join(__dirname, "upload", book.url);
    fs.unlink(imgPath, async (err) => {
      if (err) {
        console.error(`Error removing file: ${err}`);
      } else {
        console.log(`File ${imgPath} has been successfully removed.`);
      }
      await Books.deleteOne({ _id: id });
      res.json({ Msg: "Delete Successfully" });
    });
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { deleteData, addData, updateData, upload  ,getData};
