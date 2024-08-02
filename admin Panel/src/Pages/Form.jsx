import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

export default function FormP() {
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
      await axios.post("https://ldfs6814-8085.inc1.devtunnels.ms/createbook", formData, {
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
    <>
      <h1>Form</h1>
      <Form onSubmit={handleAddData} className="m-0 py-4 form">
        <Form.Group className="mb-3" controlId="formBasicBookName">
          <Form.Label>Book Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            className="text-light"
            style={{ backgroundColor: "#2a3038" }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicBookAuthor">
          <Form.Label>Book Author</Form.Label>
          <Form.Control
            type="text"
            className="text-light"
            placeholder="Enter Book Author"
            style={{ backgroundColor: "#2a3038" }}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicBookYear2">
          <Form.Label>Book Price2</Form.Label>
          <Form.Control
            type="number"
            className="text-light"
            placeholder="Enter  Book Price2"
            style={{ backgroundColor: "#2a3038" }}
            value={price2}
            onChange={(e) => setPrice2(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicBookYear">
          <Form.Label>Book Price</Form.Label>
          <Form.Control
            type="number"
            className="text-light"
            placeholder="Enter  Book Price"
            style={{ backgroundColor: "#2a3038" }}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicBookISBIN">
          <Form.Label>Book ISBIN No</Form.Label>
          <Form.Control
            type="number"
            className="text-light"
            placeholder="Enter ISBIN Number"
            style={{ backgroundColor: "#2a3038" }}
            value={isbin}
            onChange={(e) => setIsbin(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicBookLanguage">
          <Form.Label>Book Language</Form.Label>
          <Form.Control
            type="text"
            className="text-light"
            placeholder="Enter Language"
            style={{ backgroundColor: "#2a3038" }}
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicBookDescription">
          <Form.Label>Book Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            className="text-light"
            placeholder="Enter Description"
            style={{ backgroundColor: "#2a3038" }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Book Image</Form.Label>
          <Form.Control
            accept="image/*"
            type="file"
            // value={null}
            style={{ backgroundColor: "#2a3038" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Book
        </Button>
      </Form>
    </>
  );
}
