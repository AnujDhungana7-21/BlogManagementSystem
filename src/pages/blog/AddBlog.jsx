import React from "react";
import Layout from "../../components/layout/Layout";
import Form from "./components/form/Form";
import axios from "axios";
import { BASE_URL } from "../../config";
import Alert from "../../components/sweetAlert/Alert";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const Navigate = useNavigate();
  const handleCreateBlog = async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}/blog`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      });
      if (response.status === 201) {
        Alert("", response?.data?.message, "success");
        Navigate("/");
      } else {
        Alert("opps! Something Went wrong", "Unable to Create Blog", "error");
      }
    } catch (error) {
      Alert(
        "opps! Something Went wrong",
        error?.response?.data?.message,
        "error"
      );
    }
  };
  return (
    <Layout>
      <Form type="Create New" onSubmit={handleCreateBlog} />
    </Layout>
  );
};

export default AddBlog;
