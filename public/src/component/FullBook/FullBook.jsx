// ImageDetail.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const ImageDetail = () => {
    const location = useLocation();
    const { image, title, author, price } = location.state;

  return (
    <>
      <Card style={{ width: 'auto', margin: 'auto', fontFamily: 'lora', textAlign: 'center' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Title>{author}</Card.Title>
          <Card.Text>
            <span className='text-danger fw-bold fs-5'>${price}.00</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ImageDetail;
