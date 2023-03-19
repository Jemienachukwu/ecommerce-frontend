import React, { useEffect } from "react";
import { Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Message from "./Message";
import Loader from "./Loader";
import { listTopProducts } from "../actions/productsAction";
import { useDispatch, useSelector } from "react-redux";
const ProductCarousel = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);
  const img =
    "https://img.freepik.com/premium-photo/studio-template-tidewater-green-pedestal-display-product-shelf-dark-green-empty-room-interior-design-with-podium-advertising-3d-rendering_275216-117.jpg?size=626&ext=jpg&ga=GA1.1.1385335898.1677012073&semt=ais";

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel
      pause="hover"
      // className="bg-light"
      variant="light"
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      {products?.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid />
            <Carousel.Caption className="carousel-caption" variant="dark">
              <h2>
                {product.name} (${product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
