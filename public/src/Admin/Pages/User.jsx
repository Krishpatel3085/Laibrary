import React from 'react'
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import axios from "axios";
import { APi_URL } from '../../Utils/apiConfig';
export default function User() {

  const [items, setItems] = useState([]);
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    axios
      .get(APi_URL + "/user/get")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(APi_URL + "/admin/get")
      .then((response) => {
        setAdmin(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);


  return (
    <div className="Users">

      <h1 className='text-start ms-4 mt-2'>Users</h1>
      <p className='text-start ms-4'>Welcome to your Users</p>

      <h2>WEB USERS</h2>
      <div className="p-4">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>UserName</th>
              <th>Password</th>
            </tr>
          </thead>
          {items.map((item, index) => {
            return (
              <tbody>
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.email}</td>
                  <td>{item.username}</td>
                  <td>{item.password}</td>
                </tr>

              </tbody>
            );
          })}
          <tfoot>
            <tr>
              <td colSpan="4">Total Users: {items.length}</td>
            </tr>
          </tfoot>
        </Table>

      </div>

      <h2>Admin Users</h2>
      <div className="p-4">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>UserName</th>
              <th>Password</th>
            </tr>
          </thead>
          {admin.map((item, index) => {
            return (
              <tbody>
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.email}</td>
                  <td>{item.username}</td>
                  <td>{item.password}</td>
                </tr>

              </tbody>
            );
          })}
          <tfoot>
            <tr>
              <td colSpan="4">Total Users: {admin.length}</td>
            </tr>
          </tfoot>
        </Table>

      </div>
    </div>
  )
}
