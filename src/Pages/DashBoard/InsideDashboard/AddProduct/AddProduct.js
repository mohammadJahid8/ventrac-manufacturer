import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import fetcher from "../../../Shared/api/axios.config";
import "./AddProduct.css";

const AddProduct = () => {
  const [imageURL, setImageURL] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const product = {
      ...data,
      name: data.name,
      quantity: data.quantity,
      price: data.price,
      image: imageURL,
      description: data.description,
      minOrder: data.minOrder,
    };

    const res = fetcher.post("/tools", product);

    reset();
    toast.success("New product added!!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleImage = (e) => {
    const image = e.target.files[0];

    const formData = new FormData();

    formData.append("image", image);

    axios
      .post(
        "https://api.imgbb.com/1/upload?key=274ad9f8c3d7517025c45a66c376bbee",
        formData
      )
      .then((response) => {
        setImageURL(response.data.data.display_url);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-center items-center mt-6">
        <div className=" w-11/12">
          <div className="p-8 bg-gray-100 flex flex-col lg:w-full">
            <h2 className="text-2xl font-bold  text-gray-800 text-center">
              Add a New Product
            </h2>
            <div className="mt-8">
              <input
                className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                type="text"
                placeholder="Product Name"
                required
                {...register("name")}
              />
            </div>
            <div className="mt-2 flex-col">
              <div>
                <input
                  className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="text"
                  placeholder="Description"
                  required
                  {...register("description")}
                />
              </div>
              <div className="flex-row flex mt-2">
                <input
                  className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="number"
                  placeholder="Quantity"
                  required
                  {...register("quantity")}
                />
                <input
                  className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="number"
                  placeholder="Minimum Order"
                  required
                  {...register("minOrder")}
                />
              </div>
            </div>

            <div className="mt-2 flex-col">
              <div>
                <input
                  className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="number"
                  placeholder="Price"
                  required
                  {...register("price")}
                />
              </div>
            </div>

            <div className="flex flex-col w-full h-full p-1 overflow-auto">
              <div className="flex flex-col items-center justify-center py-4 text-base transition duration-500 ease-in-out transform bg-white border border-dashed rounded-lg text-blueGray-500 focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                <p className="flex flex-wrap justify-center mb-3 text-base leading-7 text-blueGray-500">
                  <span>Drag and drop your</span>&nbsp;
                  <span>files anywhere or</span>
                </p>
                <label htmlFor="file" className="input-file">
                  <input
                    type="file"
                    id="file"
                    required
                    onChange={handleImage}
                  />
                </label>
              </div>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary   w-full">ADD PRODUCT</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
