import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBar = ({ navigate }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };
  return (
    <Form onSubmit={submitHandler} className="d-flex justify-content-center">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="search products..."
        className="mr-sm-2 ml-sm-5"
        style={{ width: "100%" }}
      ></Form.Control>

      <Button type="submit" variant="outline-success" className="p-2">
        <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
      </Button>
    </Form>
  );
};

export default SearchBar;
