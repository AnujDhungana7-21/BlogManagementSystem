import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/blog/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import AddBlog from "./pages/blog/AddBlog";
import EditBlog from "./pages/blog/EditBlog";
import SinglePage from "./pages/blog/SinglePage";
import Allproducts from "./pages/product/Allproducts";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog/add" element={<AddBlog />} />
        <Route path="/blog/edit" element={<EditBlog />} />
        <Route path="/single/:_id" element={<SinglePage />} />
        <Route path="/allproducts" element={<Allproducts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
