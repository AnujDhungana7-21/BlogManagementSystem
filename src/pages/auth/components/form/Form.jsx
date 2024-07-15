import React, { useState } from "react";
import { Link } from "react-router-dom";
const Form = ({ type, onSubmit }) => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    // console.log(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <div className="bg-gray-200 h-dvh">
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {type === "Login" ? "LOGIN FORM " : "REGISTER FORM"}
        </h1>
        <form
          className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"
          onSubmit={handleSubmit}
        >
          {type === "Register" && (
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Username
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="text"
                id="name"
                name="username"
                onChange={handleChange}
                placeholder="John Doe"
              />
            </div>
          )}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              placeholder="john@example.com"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              placeholder="********"
            />
          </div>
          <button
            className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
            type="submit"
          >
            {type === "Login" ? "Login" : "Register"}
          </button>
          {type === "Login" && (
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300 py-4">
              Not registered?{" "}
              <Link
                to="/register"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Create account
              </Link>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
