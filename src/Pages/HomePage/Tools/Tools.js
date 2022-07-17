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

  let toolData = tools?.data;
  let newTool = toolData?.slice().reverse();

  // console.log(newArray);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="pb-16">
      {tools?.data?.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <div className="bg-gray-100 pt-9 sm:pt-12 lg:pt-16 pb-24 sm:pb-52">
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
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 justify-items-between gap-x-6 gap-y-5">
              {newTool?.map((tool) => (

                <div className="hover:shadow-xl rounded-md shadow-md bg-white text-gray-800 ">
                  <img src={tool.image} alt="" className="w-48 md:w-full rounded-t-md h-48 md:h-72" />
                  <div className=" p-6 ">

                    <div className="">
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
                    <div className="flex my-2">
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

                  </div>
                  <button
                    onClick={() => navigate(`/purchase/${tool._id}`)}
                    type="button" className="flex items-center justify-center w-full p-2 font-semibold tracking-wide  text-gray-100 bg-primary">
                    Place Order</button>
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
