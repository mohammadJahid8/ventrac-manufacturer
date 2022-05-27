import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import fetcher from "../../Shared/api/axios.config";
import Loading from "../../Shared/Loading/Loading";

const Tools = () => {
  const navigate = useNavigate();

  //data loaded from database by axios custom api using react query
  const { data: tools, isLoading } = useQuery("tools", () =>
    fetcher.get("/tools")
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="pb-16">
      {tools?.data?.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <div className="bg-gray-100 flex flex-col justify-center items-center pt-9 sm:pt-12 lg:pt-16 pb-24 sm:pb-52">
            <div className="2xl:container 2xl:mx-auto flex flex-col justify-center items-center sm:pb-12 lg:pb-0 space-y-4 px-4 md:px-6 2xl:px-0">
              <div>
                <p className="text-3xl lg:text-4xl font-semibold leading-9 text-center text-gray-800">
                  Best Selling Tools
                </p>
              </div>
              <div>
                <p className="text-base leading-normal sm:leading-none text-center text-gray-600">
                  Explore the best products that you like
                </p>
              </div>
            </div>
          </div>
          <div className="-mt-16 sm:-mt-48 lg:-mt-32 xl:-mt-40 2xl:container 2xl:mx-auto flex justify-center items-center space-y-4 px-4 md:px-6 2xl:px-0 mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-between gap-x-6 gap-y-5">
              {tools?.data?.map((tool) => (
                <div key={tool._id} className="mx-2 w-72 lg:mb-0  shadow-md">
                  <div>
                    <img src={tool.image} className="w-96" alt="" />
                  </div>
                  <div className="bg-white">
                    <div className="flex items-center justify-between px-4 pt-4">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-bookmark"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#2c3e50"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                        </svg>
                      </div>
                      <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                        <p className="text-xs text-yellow-500">Featured</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center">
                        <h2 className="text-lg font-semibold">{tool.name}</h2>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        {tool.description.slice(0, 80)}...
                      </p>
                      <p className="text-xs text-gray-600 mt-2">
                        Available Quantity: {tool.quantity}
                      </p>
                      <p className="text-xs text-gray-600 mt-2">
                        Minimum Order:{tool.minOrder}
                      </p>
                      <div className="flex my-4">
                        <div>
                          <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                            12 months warranty
                          </p>
                        </div>
                        <div className="pl-2">
                          <p className="text-xs text-gray-600 px-2 bg-orange-100 py-1">
                            In Stock
                          </p>
                        </div>
                        <div className="pl-2">
                          <h3 className="text-indigo-700 text-base font-semibold">
                            ${tool.price}/per
                          </h3>
                        </div>
                      </div>

                      <button
                        onClick={() => navigate(`/purchase/${tool._id}`)}
                        className="btn btn-wide btn-primary"
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tools;
