import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { listProducts } from "../actions/productsAction";
import Loader from "../component/Loader";
import Message from "../component/Message";
import Paginate from "../component/Paginate";
import Product from "../component/Product";

const ProductCategory = () => {
  let { id } = useParams();
  const { loading, error, products, page, pages } = useSelector(
    (state) => state.productList
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts("", 1));
  }, [dispatch]);

  return (
    <div>
      {error ? (
        Message
      ) : loading ? (
        <Loader />
      ) : (
        <Row>
          <div className="d-flex justify-content-between align-items-center ">
            <h5>{id}</h5>
          </div>
          {products
            .filter((product) => product.category === id)
            .map((product) => (
              <Col xs={6} sm={12} md={6} lg={4} xl={3} key={product._id}>
                <Product product={product} />
              </Col>
            ))}
          {id === "Accessories" && (
            <Row>
              <div className="d-flex justify-content-between align-items-center ">
                <h5>Electronics</h5>
              </div>
              {products
                .filter((product) => product.category === "Electronics")
                .map((product) => (
                  <Col xs={6} sm={12} md={6} lg={4} xl={3} key={product._id}>
                    <Product product={product} />
                  </Col>
                ))}
            </Row>
          )}
        </Row>
      )}
      <Paginate pages={pages} page={page} />
    </div>
  );
};

export default ProductCategory;
