import React from "react";
import Layout from "../../components/layout/Layout";
import Form from "./components/form/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Alert from "../../components/sweetAlert/Alert";
const Login = () => {
  const Navigate = useNavigate();
  const handleLogin = async (data) => {
    try {
      const response = await axios.post(
        "https://react30.onrender.com/api/user/login",
        data
      );
      if (response.status === 200) {
        Alert("Welcome", `${response?.data?.message}`, "success");
        Navigate("/");
      } else {
        Alert("opps! Bad Request", "Login Failed", "error");
      }
      return;
    } catch (error) {
      Alert("opps! Bad request", `${error?.response?.data?.message}`, "error");
    }
  };
  return (
    <Layout>
      <Form type="Login" onSubmit={handleLogin} />
    </Layout>
  );
};

export default Login;
