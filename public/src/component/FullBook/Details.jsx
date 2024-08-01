import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./details.css";
function Details() {
  const { _id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://ldfs6814-8085.inc1.devtunnels.ms/${_id}`
        );
        console.log("API Response:", response); // Log the entire response
        if (response.data && response.data.data) {
          console.log("API Data:", response.data.data);
          setItem(response.data.data);
        } else {
          console.error("Unexpected response structure:", response);
        }
        setLoading(false);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [_id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;
  if (!item) return <div>No data found</div>;

  return (
    <>
      <div className="detail-card py-4">
        <div className="container ">
          <div className="row">
            <div className="col-md-5">
              <img
                src={
                  "https://ldfs6814-8085.inc1.devtunnels.ms/upload/" + item.url
                }
                width={"500px"}
              />
            </div>
            <div className="col-md-7 p-4">
              <div className="detail-price">
                <span className="text-secondary">
                  <strike>${item.price2}.00</strike>
                </span> 
                
                <span className="text-danger fw-bold ">
                  <u>${item.price}.00</u>
                </span>
              </div>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <h5>Share:  
              <span style={{color:"#395692"}}><i class="bi bi-facebook"></i></span>
              <span style={{color:"#1c9dec"}}><i class="bi bi-twitter"></i></span>
              <span style={{color:"#0073af"}}><i class="bi bi-linkedin"></i></span>
              <span style={{color:"#334358"}}><i class="bi bi-instagram"></i></span>
              </h5>
              <hr />
              <p>
                <span> <b> Author:</b>  {item.author}</span> <br />
                <span> <b> Language:</b>  {item.language}</span>
              </p>
              <button>ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
