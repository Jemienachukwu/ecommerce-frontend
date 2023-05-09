import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  return (
    <Card className="productCard" style={{ position: "relative" }}>
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          varient="top"
          className="productCardImg"
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong className="cardText">
              {truncateString(product.name, 10)}
            </strong>
          </Card.Title>
        </Link>
        <Card.Text as="div" className="cardText">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h3" className="cardText">
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
