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


  return (
    <div className=" container py-2   ">
      <h1>Books</h1>
      <br />
      <div className="mas d-flex px-5 ms-2 gap-5">
        {items.map((item, index) => {
          return (
            <>
              <div className="card book-card ">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={'https://ldfs6814-8085.inc1.devtunnels.ms/upload/' + item.url} className="img-fluid" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
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
                      <p className="card-text ">
                        <strong>Summary:</strong> {item.description}
                      </p>
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

// <div className="col-md-12">
//   <div className=" col-md-5 ">
//     <img src={'https://ldfs6814-8085.inc1.devtunnels.ms/upload/' + item.url} alt="" />
//   </div>
//   <div className="col-md-7">
//     <h3>{item.title}</h3>
//     <p>{item.author}</p>
//     <p>{item.year}</p>
//     <p>{item.isbin}</p>
//     <p>{item.language}</p>
//     <p>{item.description}</p>
//     <button>Edit</button>
//     <button>Delete</button>
//   </div>
// </div>