import React from 'react'
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import axios from "axios";

export default function User() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://ldfs6814-8085.inc1.devtunnels.ms/user/get")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);
  return (
    <div className="Users">

      <h1 className='text-start ms-4 mt-2'>Users</h1>
      <p className='text-start ms-4'>Welcome to your Users</p>

      <div className="p-4">

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Password</th>
            </tr>
          </thead>
          {items.map((item, index) => {
            return (
              <tbody>
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.email}</td>
                  <td>{item.gender}</td>
                  <td>{item.password}</td>
                </tr>

              </tbody>
            );
          })}
          <tfoot>
            <tr>
              <td colSpan="4">Total Users: {items.length}</td>
            </tr>

            {/* Add pagination here */}
          </tfoot>
        </Table>

      </div>
    </div>
  )
}