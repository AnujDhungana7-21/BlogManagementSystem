import React from "react";
import Layout from "../../components/layout/Layout";
import Form from "./components/form/Form";

const Login = () => {
  const handleLogin = (data) => {
    console.log(data, "Login data");
  };
  return (
    <Layout>
      <Form type="Login" onSubmit={handleLogin} />
    </Layout>
  );
};

export default Login;
