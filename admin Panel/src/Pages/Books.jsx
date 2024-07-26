import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState, useEffect } from "react";
import axios from "axios";

export default function Book() {
  const [items, setItems] = useState([]);
  const [editedBook, setEditedBook] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    axios
      .get("https://ldfs6814-8085.inc1.devtunnels.ms/")
      .then((response) => {
        setItems(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const deleteItem = (id) => {
    axios
      .delete(`https://ldfs6814-8085.inc1.devtunnels.ms/${id}`)
      .then((response) => {
        // Remove the deleted item from state
        setItems(items.filter(item => item._id !== id));
      })
      .catch((error) => {
        console.error("There was an error deleting the item!", error);
      });
  };

  const editItem = (item) => {
    setEditedBook(item);
  };

  const updateItem = () => {
    const formData = new FormData();
    formData.append("title", editedBook.title);
    formData.append("author", editedBook.author);
    formData.append("year", editedBook.year);
    formData.append("description", editedBook.description);
    formData.append("isbin", editedBook.isbin);
    formData.append("language", editedBook.language);
    if (imageFile) {
      formData.append("url", imageFile);
    }

    axios
      .put(`https://ldfs6814-8085.inc1.devtunnels.ms/${editedBook._id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setItems(items.map(item => (item._id === editedBook._id ? response.data.updatedBook : item)));
        setEditedBook(null);
        setImageFile(null);
      })
      .catch((error) => {
        console.error("There was an error updating the item!", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBook({ ...editedBook, [name]: value });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };
  return (
    <div className=" container ">
      <h1>Books</h1>
      {editedBook && (
        <div className="card book-card-2 p-3 bg-dark text-white m-auto">
          <div className="row no-gutters">
            <h2 className="text-center"> --- Update ---</h2>
            <div className="col-md-4">
              <img src={`https://ldfs6814-8085.inc1.devtunnels.ms/upload/${editedBook.url}`} className="img-fluid" alt='img' />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  <strong>Book Title: </strong>
                  <input type="text" name="title" value={editedBook.title} onChange={handleChange} />
                </h5>
                <p className="card-text">
                  <strong>Author:</strong>
                  <input type="text" name="author" value={editedBook.author} onChange={handleChange} />
                </p>
                <p className="card-text">
                  <strong>Year:</strong>
                  <input type="text" name="year" value={editedBook.year} onChange={handleChange} />
                </p>
                <p className="card-text">
                  <strong>Isbin:</strong>
                  <input type="text" name="isbin" value={editedBook.isbin} onChange={handleChange} />
                </p>
                <p className="card-text">
                  <strong>Summary:</strong>
                  <textarea name="description" rows={3} cols={40} value={editedBook.description} onChange={handleChange}></textarea>
                </p>
                <p className="card-text">
                  <strong>Update Image:</strong>
                  <input type="file" onChange={handleFileChange} />
                </p>
                <div className="button-group d-flex gap-2">
                  <button onClick={updateItem}>Update</button>
                  <button onClick={() => setEditedBook(null)}>Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <br />
      <div className="mas d-flex px-4 gap-4 flex-wrap">
        {items.map((item, index) => {
          return (
            <>
              <div className="card book-card p-3  bg-dark text-white ">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={'https://ldfs6814-8085.inc1.devtunnels.ms/upload/' + item.url} className="img-fluid" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body ">
                      <h5 className="card-title"><strong>Book Title: </strong>{item.title}</h5>
                      <p className="card-text">
                        <strong>Author:</strong>  {item.author}
                      </p>
                      <p className="card-text">
                        <strong>Year:</strong>{item.year}
                      </p>
                      <p className="card-text">
                        <strong>Isbin:</strong> {item.isbin}
                      </p>
                      <p className="card-text summary ">
                        <strong>Summary:</strong> {item.description}
                      </p>
                      <div className="button-group d-flex gap-2">

                        <button onClick={() => editItem(item)}>Edit</button>
                        <button onClick={() => deleteItem(item._id)} className="bg-danger text-white">Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

