import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState, useEffect } from "react";
import axios from "axios";

export default function Book() {
  const [items, setItems] = useState([]);

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

  return (
    <div className=" container">
      <h1>Books</h1>
      <br />
      <div className="mas d-flex px-4 gap-4 flex-wrap">
        {items.map((item, index) => {
          return (
            <>
              <div className="card book-card p-3 bg-dark text-white ">
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

                        <button>Edite</button>
                        <button onClick={() => deleteItem(item._id)}>Delete</button>
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

