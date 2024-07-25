const express = require("express")
const mongoose = require("mongoose")
const Books = require("./Model")
const cors = require('cors')
const multer = require('multer')
const path = require('path');

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

app.get("/", async (req, res) => {  
    const data = await Books.find()
    res.json({ data: data })
    
})  

app.post('/',upload.single('url'), async (req, res) => {
    const req_body = req.body
    console.log(req.body.json_data)
    console.log(req.file)
    const title = req_body["title"]
    const author = req_body["author"]
    const year = req_body["year"]
    const description = req_body["description"]
    const isbin = req_body["isbin"]
    const language = req_body['language']
    let url = '';
    if (req.file) {
        url =  req.file.filename;
    }
    console.log(url)
    await Books.create({ title, author, year, description, isbin, language, url });  
    
    res.json({ Msg: "Post Succefully" })

})

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

// app.delete('/:id',async (req, res) => {
//     const id = req.params['id']
//     await Books.deleteOne({ _id: id })
//     res.json({ Msg: "Delete Succefully" })
// })

app.listen(8085, async () => {
    await mongoose.connect("mongodb://localhost:27017/Book-Details")
    console.log("Connected to MongoDB Succefully")
    console.log("server Started on http://localhost:8085/")
}) 