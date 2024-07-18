import React from "react";
import Layout from "../../components/layout/Layout";
import Form from "./components/form/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Alert from "../../components/sweetAlert/Alert.js";
import { BASE_URL } from "../../config.js";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, data);
      if (response.status === 201) {
        Alert("Good Job👍", `${response?.data?.message}`, "success");
        navigate("/login");
      } else {
        Alert("Oops! Bad request", "Register Failed", "error");
      }
    } catch (error) {
      Alert("Oops! Bad request", `${error?.response?.data?.message}`, "error");
    }
  };

  return (
    <>
      <Layout>
        <Form type="Register" onSubmit={handleRegister} />
      </Layout>
    </>
  );
};

export default Register;
