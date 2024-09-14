  const express = require("express");
  const Books = require("../Model/Book");
  const cors = require("cors");
  const multer = require("multer");
  // const path = require("path");
  // const fs = require("fs");
  const dotenv = require('dotenv');
  dotenv.config()

  const aws = require('aws-sdk');
  const multers3 = require('multer-s3')
  const BUCKET_NAME = process.env.BUCKET_NAME;
  const s3 = new aws.S3();

  const upload = multer({
    storage: multers3({
      s3: s3,
      bucket: BUCKET_NAME,
      metadata: function (req, file, cb) {
        cb(null, { fieldname: file.fieldname })
      },
      key: function (req, file, cb) {
        cb(null, file.originalname);
      },
    })
  })

  const app = express();
  app.use(express.json());
  app.use(cors());

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

  // Data singel Get
  const getSingelData = async (req, res) => {
    try {
      const id = req.params["id"]
      const data = await Books.findOne({ _id: id });
      res.json({ data });
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  // Data Create
  const addData = async (req, res) => {
    try {
      const { title, author, price, price2, description, isbin, language } = req.body;
      const url = req.file ?`https://${BUCKET_NAME}.s3.amazonaws.com/${req.file.key}` : "";
      await Books.create({
        title,
        author,
        price,
        price2,
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
    const { title, author, price, price2, description, isbin, language } = req.body;
    let url;

    try {
      if (req.file) {
        const book = await Books.findById(id);
        if (book && book.url) {
          // Delete the old image from S3
          const key = book.url.split('.com/')[1];
          await s3.deleteObject({
            Bucket: BUCKET_NAME,
            Key: key,
          }).promise();
        }
        // Set the URL to the new file's filename
        url = `https://${BUCKET_NAME}.s3.amazonaws.com/${req.file.key}`;
      } else {
        const book = await Books.findById(id);
        url = book.url;
      }
      const updatedBook = await Books.findByIdAndUpdate(
        id,
        { title, author, price, price2, description, isbin, language, url },
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
      const filename = req.params.filename;
      await s3.deleteObject({ Bucket: BUCKET_NAME, Key: filename }).promise();
      await Books.deleteOne({ _id: id });
      res.json({ Msg: "Delete Successfully" });

    } catch (error) {
      console.error("Error deleting data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  module.exports = { deleteData, addData, updateData, upload, getData, getSingelData };
