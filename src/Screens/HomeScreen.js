import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";
import Product from "../component/Product";
import { listProducts } from "../actions/productsAction";
import Loader from "../component/Loader";
import Message from "../component/Message";
import { useParams } from "react-router-dom";
import Paginate from "../component/Paginate";
import Meta from "../component/Meta";
import ProductCarousel from "../component/ProductCarousel";
import { Link } from "react-router-dom";
import ProductCategoryHeader from "../component/ProductCategoryHeader";

const HomeScreen = () => {
  const dispatch = useDispatch();
  let { keyword } = useParams();
  let { pageNumber } = useParams() || 1;

  const { loading, error, products, page, pages } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  const Category = ({ category }) => {
    return (
      <Row>
        {!keyword && (
          <div className="d-flex justify-content-between align-items-center ">
            <h5>{category}</h5>
            <Link to={`/category/${category}`}>
              <Button variant="outline-success" style={{ padding: "10px" }}>
                View more
              </Button>
            </Link>
          </div>
        )}

        {products
          ?.filter((product) => product.category === category)
          .map((product) => (
            <Col xs={6} sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
      </Row>
    );
  };
  return (
    <>
      <Meta />
      {!keyword ? (
        <div>
          <ProductCategoryHeader />
        </div>
      ) : (
        <Link to="/" className="btn btn-dark">
          Go Back
        </Link>
      )}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Category category="Phones" />
          {!keyword && (
            <div>
              <h1>Latest Prodocts</h1> <ProductCarousel />
            </div>
          )}
          <Category category="Laptops" />
          <Category category="Speakers" />
          <Category category="Accessories" />
          <Category category="Gaming" />
          <Category category="Television" />
          <Category category="Electronics" />
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </div>
      )}
    </>
  );
};

export default HomeScreen;
