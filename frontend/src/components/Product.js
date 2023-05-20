/* eslint-disable no-template-curly-in-string */
import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'
const Product = ({product}) => {
  console.log(product)
  return (
    <Card className='my-3 p-2 rounded'>
      
      <Link to={product._id }>
         <Card.Img src={product.image}/>
       </Link>
       <Card.Body>
          <Link to={product.id}>
            <strong>{product.name}</strong>
            </Link>
       </Card.Body>
       <Card.Body>
          <Link to={product.id}>
            <strong>{product.descriptions}</strong>
            </Link>
       </Card.Body>
         <Card.Text as ="div">
          <div className="my-3">
          <Rating value={product.rating} text={product.numReviews} color={'#f8e825'}/>
           
          </div>

         </Card.Text>
         <Card.Text as ="h3">
        
          {product.price}
         
         </Card.Text>
    </Card>
  )
}

export default Product
