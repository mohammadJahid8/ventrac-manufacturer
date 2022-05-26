import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import fetcher from "../Shared/api/axios.config";
import { toast } from "react-toastify";

const Purchase = () => {
  const [disabled, setDisabled] = useState(false);
  const [inputQuantity, setInputQuantity] = useState();
  const [tool, setTool] = useState({});

  const { _id, image, minOrder, description, price, name, quantity } = tool;
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { id } = useParams();
  let navigate = useNavigate(); //for back button

  //load a signle tool
  useEffect(() => {
    (async () => {
      const res = await fetcher.get(`/tools/${id}`);
      setTool(res.data);
    })();
  }, [id]);

  //getting input value
  const orderQuantityChange = (event) => {
    const inputQuantity = event.target.value;
    setInputQuantity(inputQuantity);
  };

  const totalPrice = inputQuantity * price;

  //place an order and send data to the database
  const onSubmit = (data) => {
    const newData = {
      ...data,
      quantity: inputQuantity,
      name: user.displayName,
      productName: name,
      email: user.email,
      price: totalPrice,
      image: image,
      status: "pending",
    };
    const res = fetcher.post("/orders", newData);
    reset();
    toast.success("Your Order is Placed Successfully!", {
      position: toast.POSITION.TOP_CENTER,
    });
    const newQuantity = quantity - inputQuantity;
    const newTool = { ...tool, quantity: newQuantity };
    setTool(newTool);

    const res2 = fetcher.put(`/tools/${id}`, newTool);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="pt-10 pb-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
        <div className="flex flex-col justify-start items-start w-full space-y-9">
          <div className="flex justify-start flex-col items-start space-y-2">
            <button
              onClick={() => navigate(-1)}
              className="flex flex-row items-center text-gray-600 hover:text-gray-500 space-x-1"
            >
              <svg
                className="fill-stroke"
                width="28"
                height="28"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.91681 7H11.0835"
                  stroke="currentColor"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.91681 7L5.25014 9.33333"
                  stroke="currentColor"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.91681 7.00002L5.25014 4.66669"
                  stroke="currentColor"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-lg leading-none">Back</p>
            </button>
            <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
              Checkout
            </p>
            <p className="text-base leading-normal sm:leading-4 text-gray-600">
              Product Id{">"}
              {_id}
            </p>
          </div>

          <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
            <div className=" flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
              <div className="flex flex-col justify-start items-start w-full space-y-4">
                <p className="text-xl md:text-2xl leading-normal text-gray-800">
                  {name}
                </p>
                <p className="text-base font-semibold leading-none text-gray-600">
                  ${price}.00
                </p>
              </div>
              <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                <img src={image} className="w-96" alt="headphones" />
              </div>
            </div>

            <div className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-3/5">
              <div>
                <h3 className="font-semibold">About the product</h3>
                <p className=" mb-2">{description}</p>
              </div>
              <p className="text-base font-bold mt-5 leading-normal sm:leading-4 text-gray-600">
                Please provide necessary informations to purchase
              </p>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-4">
                  <input
                    className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="text"
                    disabled
                    value={user?.displayName}
                  />
                </div>
                <div className="mt-4">
                  <input
                    className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="email"
                    disabled
                    value={user?.email}
                  />
                </div>

                <div className="mt-4">
                  <input
                    className=" border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="text"
                    placeholder="Address"
                    required
                    {...register("address")}
                  />

                  <input
                    className="mt-4 border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="number"
                    placeholder="Phone Number"
                    required
                    {...register("number")}
                  />
                </div>

                <div className="mt-2 flex-col">
                  <p className="font-semibold mb-3 mt-6">
                    Available Quantity: {quantity}
                  </p>

                  <p className="font-semibold mb-3 mt-3">
                    Per Unit Price: ${price}
                  </p>

                  {(inputQuantity > minOrder || inputQuantity < quantity) && (
                    <p className="font-semibold mb-3">
                      My Order Quantity: {inputQuantity}
                    </p>
                  )}
                  {(inputQuantity < minOrder || inputQuantity < quantity) && (
                    <p className="font-semibold mb-3 mt-3">
                      Total Price: ${totalPrice}
                    </p>
                  )}

                  <div>
                    <input
                      onChange={orderQuantityChange}
                      className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                      type="number"
                      placeholder={`Minimum Order ${minOrder}pcs`}
                      required
                    />

                    {inputQuantity < minOrder && (
                      <p className="text-red-500 text-sm">
                        Minimum order {minOrder}pcs
                      </p>
                    )}
                    {inputQuantity > quantity && (
                      <p className="text-red-500 text-sm">
                        Maximum order {quantity}pcs
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={
                    (inputQuantity < minOrder || inputQuantity > quantity) &&
                    !disabled
                  }
                  className="mt-8 border border-transparent text-white btn btn-primary flex justify-center items-center py-4 rounded w-full"
                >
                  <div>
                    <p className="text-base leading-4">Place Order</p>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
