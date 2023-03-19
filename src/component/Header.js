import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { logout } from "../actions/userAction";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  function logoutHandler() {
    dispatch(logout());
    navigate("/");
  }
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <header>
      <Navbar
        expand="lg"
        bg="dark"
        variant="dark"
        collapseOnSelect
        className="p-4"
      >
        <>
          <LinkContainer to="/" className="my-2">
            <Navbar.Brand>Online Store</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <SearchBar navigate={navigate} />
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>{" "}
                  {cartItems.length >= 1 &&
                    cartItems.reduce((acc, item) => acc + item.qty, 0)}
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i>Sign up
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="ADMIN SETTINGS" id="adminMenu">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>user</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </>
      </Navbar>
    </header>
  );
};

export default Header;
