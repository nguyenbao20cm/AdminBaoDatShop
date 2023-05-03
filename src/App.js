
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./Page/Home";
import Setting from "./Page/Setting";
import About from "./Page/About";
import ProductTypeList from "./Page/Product/ProductTypeList";
import ProductList from "./Page/Product/ProductList";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Setting" exact element={<Setting />} />
        <Route path="/About" exact element={<About />} />
        <Route path="/ProductType" exact element={<ProductTypeList />} />
        <Route path="/Product" exact element={<ProductList/>} />
      </Routes>

    </BrowserRouter>

  );
}
export default App;
