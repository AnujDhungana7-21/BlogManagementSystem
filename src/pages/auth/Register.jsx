import React from "react";
import Layout from "../../components/layout/Layout";
import Form from "./components/form/Form";

const Register = () => {
  const handleRegister = (data) => {
    console.log(data,'Register data');
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
