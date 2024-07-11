import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-100 py-6 sm:py-12">
        <div className="min-h-28 ">
          <div className="max-w-screen-lg mx-auto py-4">
            <h2 className="font-bold text-center text-6xl text-slate-700 font-display">
              Our Blog Post
            </h2>
            <p className="text-center mt-4 font-medium text-slate-500">
              OUR NEWS FEED
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
              <Link to="/single/id">
                <div className="bg-white shadow rounded-lg overflow-hidden">
                  <img
                    src="https://loremflickr.com/320/240?random=1"
                    className="object-cover h-52 w-full"
                    alt=""
                  />
                  <div className="p-6">
                    <span className="block text-slate-400 font-semibold text-sm">
                      16 Juillet 2016
                    </span>
                    <h3 className="mt-3 font-bold text-lg pb-4 border-b border-slate-300">
                      <a href="#">Finding best places to visit in California</a>
                    </h3>
                    <div>
                      <button className="border border-black my-6 rounded-xl w-40 font-bold text-lg">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <img
                  src="https://loremflickr.com/320/240?random=1"
                  className="object-cover h-52 w-full"
                  alt=""
                />
                <div className="p-6">
                  <span className="block text-slate-400 font-semibold text-sm">
                    16 Juillet 2016
                  </span>
                  <h3 className="mt-3 font-bold text-lg pb-4 border-b border-slate-300">
                    <a href="#">Finding best places to visit in California</a>
                  </h3>
                  <div>
                    <button className="border border-black my-6 rounded-xl w-40 font-bold text-lg">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <img
                  src="https://loremflickr.com/320/240?random=1"
                  className="object-cover h-52 w-full"
                  alt=""
                />
                <div className="p-6">
                  <span className="block text-slate-400 font-semibold text-sm">
                    16 Juillet 2016
                  </span>
                  <h3 className="mt-3 font-bold text-lg pb-4 border-b border-slate-300">
                    <a href="#">Finding best places to visit in California</a>
                  </h3>
                  <div>
                    <button className="border border-black my-6 rounded-xl w-40 font-bold text-lg">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <img
                  src="https://loremflickr.com/320/240?random=1"
                  className="object-cover h-52 w-full"
                  alt=""
                />
                <div className="p-6">
                  <span className="block text-slate-400 font-semibold text-sm">
                    16 Juillet 2016
                  </span>
                  <h3 className="mt-3 font-bold text-lg pb-4 border-b border-slate-300">
                    <a href="#">Finding best places to visit in California</a>
                  </h3>
                  <div>
                    <button className="border border-black my-6 rounded-xl w-40 font-bold text-lg">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
