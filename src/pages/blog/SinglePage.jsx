import React from "react";
import Layout from "../../components/layout/Layout";
import { LiaEdit } from "react-icons/lia";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
const SinglePage = () => {
  return (
    <Layout>
      <div class="flex flex-col">
        <div class="bg-gray-100 py-8">
          <div class="container mx-auto px-4">
            <h1 class="text-4xl font-bold text-gray-800 mb-2">
              Blog Title Here
            </h1>
            <p class="text-gray-600">Published on April 4, 2023</p>
            <div className="flex gap-4 items-center mt-3">
              <Link to="/blog/edit">
                <button className="text-[1.5rem] ">
                  <LiaEdit />
                </button>
              </Link>
              <button className="text-[1.5rem]">
                <RiDeleteBin6Line />
              </button>
            </div>
          </div>
        </div>
        <div class="bg-white py-8">
          <div class="container mx-auto px-4 flex flex-col md:flex-row">
            <div class="w-full md:w-3/4 px-4">
              <img
                src="https://images.unsplash.com/photo-1506157786151-b8491531f063"
                alt="Blog Featured Image"
                class="mb-8"
              />
              <div class="prose max-w-none text-justify">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  facilisi. Sed sit amet feugiat eros, eget eleifend dolor.
                  Proin maximus bibendum felis, id fermentum odio vestibulum id.
                  Sed ac ligula eget dolor consequat tincidunt. Nullam fringilla
                  ipsum et ex lacinia, at bibendum elit posuere. Aliquam eget
                  leo nec nibh mollis consectetur.
                </p>
                <p>
                  Suspendisse potenti. Mauris euismod, magna sit amet aliquam
                  dapibus, ex sapien porta nisl, vel auctor orci velit in risus.
                  Fusce gravida bibendum dui, id volutpat felis dignissim a.
                  Duis sagittis, arcu ac convallis bibendum, neque dolor
                  suscipit dolor, non malesuada magna orci a mauris. Proin
                  sollicitudin diam eu enim tincidunt dapibus. Aliquam pharetra
                  purus mauris, id lacinia mi malesuada ut. Integer dignissim,
                  urna nec scelerisque feugiat, lacus sapien tincidunt sem, sed
                  luctus enim libero vel nunc. Vivamus ornare, felis quis
                  feugiat luctus, orci justo auctor urna, et elementum orci
                  dolor ac ante. Ut varius sapien nec fringilla sodales.
                  Suspendisse lacinia, metus eu suscipit lobortis, enim sapien
                  commodo sapien, non facilisis urna elit eget elit.
                </p>
                <p>
                  Nulla facilisi. Sed venenatis pretium ante, sed tempor turpis
                  sagittis ac. Pellentesque habitant morbi tristique senectus et
                  netus et malesuada fames ac turpis egestas. Integer vel diam
                  arcu. Maecenas bibendum efficitur ex sit amet tristique. Nulla
                  vel sapien euismod, bibendum velit id, facilisis magna. Sed
                  vestibulum nisi vitae justo congue, eu bibendum augue
                  interdum. Nam quis orci nec nulla posuere facilisis. Etiam
                  feugiat ligula quis est auctor, et sagittis orci elementum.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Sed gravida neque vel tellus
                  volutpat, vel laoreet lacus commodo. Vivamus quis enim leo.
                </p>
              </div>
            </div>
            <div class="w-full md:w-1/4 px-4">
              <div class="bg-gray-100 p-4">
                <h2 class="text-xl font-bold text-gray-800 mb-4">
                  Recent Posts
                </h2>
                <ul class="list-none">
                  <li class="mb-2">
                    <a href="#" class="text-gray-700 hover:text-gray-900">
                      Blog Post 1
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-gray-700 hover:text-gray-900">
                      Blog Post 2
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-gray-700 hover:text-gray-900">
                      Blog Post 3
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-gray-700 hover:text-gray-900">
                      Blog Post 4
                    </a>
                  </li>
                </ul>
              </div>
              <div class="bg-gray-100 p-4 mt-4">
                <h2 class="text-xl font-bold text-gray-800 mb-4">Categories</h2>
                <ul class="list-none">
                  <li class="mb-2">
                    <a href="#" class="text-gray-700 hover:text-gray-900">
                      Category 1
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-gray-700 hover:text-gray-900">
                      Category 2
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-gray-700 hover:text-gray-900">
                      Category 3
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-gray-700 hover:text-gray-900">
                      Category 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SinglePage;
