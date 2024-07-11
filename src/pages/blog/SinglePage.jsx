import React from "react";
import Layout from "../../components/layout/Layout";

const SinglePage = () => {
  return (
    <Layout>
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-8/12 px-4 mb-8">
          <h2 className="text-4xl font-bold mt-4 mb-6 text-center">
            My First Blog Post
          </h2>
          <img
            src="/logo.png"
            alt="Featured Image"
            className="w-full h-64  rounded"
          />

          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-700 mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p className="text-gray-700 mb-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
        <div className="w-full md:w-4/12 px-4 mb-8 mt-20">
          <div className="bg-gray-100 px-4 py-6 rounded ">
            <h3 className="text-lg font-bold mb-2">Categories</h3>
            <ul className="list-disc list-inside">
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Technology
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Travel
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Food
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SinglePage;
