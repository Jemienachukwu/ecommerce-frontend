import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/registerScreen";
import ProfileScreen from "./Screens/profileScreen";
import ShippingScreen from "./Screens/shippingScreen";
import PaymentMethodsScreen from "./Screens/PaymentMethods";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen";
import OrderScreen from "./Screens/OrderScreen";
import UserListScreen from "./Screens/UserListScreen";
import UserEditScreen from "./Screens/UserEditScreen";
import ProductListScreen from "./Screens/ProductListScreen";
import ProductEditScreen from "./Screens/ProductEditScreen";
import OrderListScreen from "./Screens/OrderListScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="p-4">
        <>
          <Routes>
            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/orders/:id" element={<OrderScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            <Route path="/payment" element={<PaymentMethodsScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart/:id" element={<CartScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/admin/userlist" element={<UserListScreen />} />
            <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
            <Route
              path="/admin/productlist"
              element={<ProductListScreen />}
              exact
            />
            <Route
              path="/admin/productlist/:pageNumber"
              element={<ProductListScreen />}
              exact
            />
            <Route path="/admin/orderlist" element={<OrderListScreen />} />
            <Route
              path="/admin/product/:id/edit"
              element={<ProductEditScreen />}
            />
            <Route path="/search/:keyword" element={<HomeScreen />} exact />
            <Route
              path="/search/:keyword/page/:pageNumber"
              element={<HomeScreen />}
            />
            <Route path="/page/:pageNumber" element={<HomeScreen />} />
            <Route path="/" element={<HomeScreen />} exact />
          </Routes>
        </>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
