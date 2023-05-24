
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./Page/Home";
import Setting from "./Page/Setting";
import About from "./Page/About";
import ProductTypeList from "./Page/Product/ProductTypeList";
import ProductList from "./Page/Product/ProductList";
import Register from "../src/Page/Register"
import Login1 from "../src/Page/Login1"
import Invoice from "../src/Page/Invoice/Invoice"
import useToken from './UseToken';

function App() {
  function setToken(userToken) {
    localStorage.setItem('token', JSON.stringify(userToken));
  }

  function getToken() {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken
  }
  const token = getToken();
  if (token == null) {
  
    return <Login1 setToken={setToken} />
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Setting" exact element={<Setting />} />
        <Route path="/About" exact element={<About />} />
        <Route path="/ProductType" exact element={<ProductTypeList />} />
        <Route path="/Product" exact element={<ProductList />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/Register" exact element={<Register />} />
        <Route path="/Invoice" exact element={<Invoice />} />
      </Routes>
      
    </BrowserRouter>

  );
}
export default App;
