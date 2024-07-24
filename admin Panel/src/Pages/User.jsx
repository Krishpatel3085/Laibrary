import React from 'react'
import Table from 'react-bootstrap/Table';

export default function User() {
  return (
    <>
      <h1>User</h1>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
        </tr>
        <tr>
          <td>2</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
        </tr>
        <tr>
          <td>3</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
        </tr>
      </tbody>
    </Table>
    </>
  )
}
