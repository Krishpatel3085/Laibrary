const express = require("express")
const mongoose = require("mongoose")
const Books = require("./Model")
const cors = require('cors')
const multer = require('multer')
const path = require('path');
const fs = require('fs')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 10000)
      cb(null, uniqueSuffix+"-"+file.originalname)
    }
  })

const upload = multer({ storage })

const app = express()
app.use(express.json())

app.use(cors());
app.use('/upload', express.static('upload'));



// Data Get
app.get("/", async (req, res) => {
  try {
    const data = await Books.find();
    res.json({ data });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Data Create
app.post("/", upload.single("url"), async (req, res) => {
  try {
    const { title, author, year, description, isbin, language } = req.body;
    const url = req.file ? req.file.filename : "";
    await Books.create({ title, author, year, description, isbin, language, url });
    res.json({ Msg: "Post Successfully" });
  } catch (error) {
    console.error("Error posting data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// app.put('/:id', async (req, res) => {
//     const id = req.params['id']
//     const req_body = req.body
//     const title = req_body["title"]
//     const author = req_body["author"]
//     const publicationYear = req_body["publicationYear"]
//     const description = req_body["description"]
//     const Isbin = req_body["Isbin"]
//     const language = req_body['language']
//     const url = req_body['url']
//     await Books.findOneAndUpdate({ _id: id }, { title, author, publicationYear, description, Isbin, language ,url})
//     res.json({ Msg: "Put Succefully" })

// })


// Data Delete
app.delete("/:id", async (req, res) => {
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
});


app.listen(8085, async () => {
    await mongoose.connect("mongodb://localhost:27017/Book-Details")
    console.log("Connected to MongoDB Succefully")
    console.log("server Started on http://localhost:8085/")
}) 