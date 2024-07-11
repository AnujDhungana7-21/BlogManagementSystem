import React from "react";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";
import Form from "./components/form/Form";

const Login = () => {
  return (
    <Layout>
      <Form type="Login" />
    </Layout>
  );
};

export default Login;
