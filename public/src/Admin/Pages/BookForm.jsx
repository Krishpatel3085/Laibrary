import React from 'react'
import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import '../Component/first.css'
export default function BookForm() {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [price2, setPrice2] = useState("");
  const [language, setLanguage] = useState("");
  const [isbin, setIsbin] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleAddData = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("price", price);
    formData.append("price2", price2);
    formData.append("language", language);
    formData.append("isbin", isbin);
    formData.append("description", description);
    formData.append("url", file);

    try {
      await axios.post("http://localhost:8085/book/createbook", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setTitle("");
      setAuthor("");
      setPrice("");
      setPrice2("");
      setLanguage("");
      setIsbin("");
      setDescription("");
      setFile(null);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="BookForm text-start">

      <h1 className='text-start ms-4 mt-2'>Book Form</h1>
      <p className='text-start ms-4'>Welcome to your Book Form</p>

      <Form onSubmit={handleAddData} className="m-0 py-4 form m-4 ">
        <Form.Group className="mb-3 " controlId="formBasicBookName">
          <Form.Label>Book Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            className="text-dark inputF"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicBookAuthor">
          <Form.Label>Book Author</Form.Label>
          <Form.Control
            type="text"
            className="text-dark inputF"
            placeholder="Enter Book Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicBookYear2">
          <Form.Label>Book Price2</Form.Label>
          <Form.Control
            type="number"
            className="text-dark inputF"
            placeholder="Enter  Book Price2"
            value={price2}
            onChange={(e) => setPrice2(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicBookYear">
          <Form.Label>Book Price</Form.Label>
          <Form.Control
            type="number"
            className="text-dark inputF"
            placeholder="Enter  Book Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicBookISBIN">
          <Form.Label>Book ISBIN No</Form.Label>
          <Form.Control
            type="number"
            className="text-dark inputF"
            placeholder="Enter ISBIN Number"
            value={isbin}
            onChange={(e) => setIsbin(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicBookLanguage">
          <Form.Label>Book Language</Form.Label>
          <Form.Control
            type="text"
            className="text-dark inputF"
            placeholder="Enter Language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicBookDescription">
          <Form.Label>Book Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            className="text-dark inputF"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Book Image</Form.Label>
          <Form.Control
            className='inputF'
            accept="image/*"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Book
        </Button>
      </Form>
    </div>
  )
}
