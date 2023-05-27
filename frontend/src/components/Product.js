import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-2 rounded'>
      <Link to={`/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>
      <Card.Body>
        <Link to={`/${product._id}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Text as='div'>
          <Rating value={product.rating} text={`${product.numReviews} reviews`} color='#f8e825' />
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
