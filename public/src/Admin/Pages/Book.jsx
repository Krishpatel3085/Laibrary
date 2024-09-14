import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { APi_URL } from '../../Utils/apiConfig';
export default function Book() {

  const [items, setItems] = useState([]);
  const [editedBook, setEditedBook] = useState(null);
  const [imageFile, setImageFile] = useState(null);




  useEffect(() => {
    axios
      .get(APi_URL + "book/getbook/")
      .then((response) => {
        setItems(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const deleteItem = (id) => {
    axios
      .delete(APi_URL + `book/delete/${id}`)
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
    formData.append("price", editedBook.price);
    formData.append("price2", editedBook.price2);
    formData.append("description", editedBook.description);
    formData.append("isbin", editedBook.isbin);
    formData.append("language", editedBook.language);
    if (imageFile) {
      formData.append("url", imageFile);
    }

    axios
      .put(APi_URL + `book/updatebook/${editedBook._id}`, formData, {
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
    <>
      <div className="Books w-100">

        <h1 className='text-start ms-4 mt-2'>Books</h1>
        <p className='text-start ms-4'>Welcome to your Books</p>


        {/* ============================
                  Update Books
      ================================ */}
        {editedBook && (
          <div className="carda book-card-2 p-3 bg-dark text-white m-auto">
            <div className="row no-gutters">
              <h2 className="text-center"> --- Update ---</h2>
              <div className="col-md-4">
                <img src={APi_URL + `book/upload/${editedBook.url}`} className="img-fluid" alt='img' />
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
                    <strong>price2:</strong>
                    <input type="text" name="price2" value={editedBook.price2} onChange={handleChange} />
                  </p>
                  <p className="card-text">
                    <strong>Price:</strong>
                    <input type="text" name="price" value={editedBook.price} onChange={handleChange} />
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
                    <button className='bg-primary' onClick={updateItem}>Update</button>
                    <button type='button' onClick={() => setEditedBook(null)}>Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <br />


        {/* ============================
                  Display Books
      ================================ */}

        <div className="section mb-5">

          <div className="mas d-flex ps-4 gap-4 flex-wrap text-start">
            {items.map((item, index) => {
              return (
                <>
                  <div className="card book-card p-3 ">
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <img src={APi_URL + 'book/upload/' + item.url} alt='img-upload' className="img-fluid" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body ">
                          <h5 className="card-title"><strong>Book Title: </strong>{item.title}</h5>
                          <p className="card-text">
                            <strong>Author:</strong>  {item.author}
                          </p>
                          <p className="card-text">
                            <strong>Price2:</strong> {item.price2}
                          </p>
                          <p className="card-text">
                            <strong>Price:</strong> {item.price}
                          </p>
                          <p className="card-text">
                            <strong>Isbin:</strong> {item.isbin}
                          </p>
                          <p className="card-text summary ">
                            <strong>Summary:</strong> {item.description}
                          </p>
                          <div className="button-group d-flex gap-2">

                            <button className='btn bg-warning' onClick={() => editItem(item)}>Edit</button>
                            <button onClick={() => deleteItem(item._id)} className="btn bg-danger">Delete</button>
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
      </div>
    </>
  )
}
