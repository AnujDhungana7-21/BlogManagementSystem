import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout.jsx";
import Card from "./components/card/Card.jsx";
import axios from "axios";
import { BASE_URL } from "../../config.js";

const Home = () => {
  const [blog, setBlog] = useState([]);
  const fetchBlogs = async () => {
    const response = await axios.get(`${BASE_URL}/blog`);
    if (response.status === 200) {
      setBlog(response.data.data);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <Layout>
      <Card Blog={blog} />;
    </Layout>
  );
};

export default Home;
