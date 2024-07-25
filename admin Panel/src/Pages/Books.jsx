import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
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

  // const deleteItem = async (id) => {
  //   try {
  //     await axios.delete(http://localhost:5000/items/${id});
  //     fetchItems();
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <div className="py-2 px-2 ">
      <h1>Books</h1>

      <br />

      <div className="conatainer Books">
        <div className="row">
          <div className="col-md-12 d-flex gap-3 flex-wrap">
            {items.map((item, index) => {
              return (
                <Card style={{ width: "18rem", height:"650px" }} key={index} className="p-2">
                  <Card.Img variant="top" src={'https://ldfs6814-8085.inc1.devtunnels.ms/upload/'+item.url} style={{width:"270px" , height:"300px"}} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>{item.author}</ListGroup.Item>
                    <ListGroup.Item>{item.year}</ListGroup.Item>
                    <ListGroup.Item>{item.isbin}</ListGroup.Item>
                    <ListGroup.Item>{item.language}</ListGroup.Item>
                  </ListGroup>
                    <Card.Text className="h-25 overflow-hidden">{item.description}</Card.Text> 
                  <Card.Body>
                    <Card.Link href="#">Edit</Card.Link>
                    <Card.Link href="#">
                      Delete
                    </Card.Link>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
