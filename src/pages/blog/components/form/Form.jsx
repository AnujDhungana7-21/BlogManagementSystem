import React, { useState } from "react";

const Form = ({ type, onSubmit }) => {
  const [data, setData] = useState({
    title: "",
    subtitle: "",
    description: "",
    category: "",
    image: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: name === "image" ? e.target.files[0] : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };
  return (
    <>
      <div className="bg-gray-200 shadow p-4 py-8">
        <div className="heading text-center font-bold text-2xl m-5 text-gray-800 ">
          <span>{type}</span> Blog
        </div>
        <form onSubmit={handleSubmit}>
          <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl bg-white">
            <input
              className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
              
              placeholder="Title"
              type="text"
              name="title"
              onChange={handleChange}
            />
            <textarea
              className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
              placeholder="Description here"
            
              name="description"
              onChange={handleChange}
            ></textarea>
            <div className="count ml-auto text-gray-400 text-xs font-semibold">
              0/300
            </div>
            <input
              className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none mt-2"
              placeholder="Sub-Title"
              type="text"
              name="subtitle"
              onChange={handleChange}
             
            />
            <input
              className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
             
              placeholder="Categories"
              name="category"
              type="text"
              onChange={handleChange}
            />

            {/* icons */}
            <div className="icons flex text-gray-500 m-2">
              <label id="select-image">
                <input type="file" name="image" onChange={handleChange} />
              </label>
            </div>

            {/* Preview image here */}
            <div id="preview" className="my-4 flex">
              {/* Add image preview logic here if needed */}
            </div>

            {/* Buttons */}
            <div className="buttons flex justify-end">
              <div className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">
                <button>Post</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
