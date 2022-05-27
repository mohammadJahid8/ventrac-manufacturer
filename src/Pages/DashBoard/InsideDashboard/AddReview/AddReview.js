import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";
import fetcher from "../../../Shared/api/axios.config";

const AddReview = () => {
  const [disabled, setDisabled] = useState(false);
  const [inputQuantity, setInputQuantity] = useState();
  const [user] = useAuthState(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const review = {
      ...data,
      rating: parseInt(inputQuantity),
      name: user?.displayName,
    };
    const res = fetcher.post("/reviews", review);
    reset();
    toast.success("Thanks for your Review!!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="flex justify-center">
      <form
        className="flex w-full max-w-sm space-x-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow ">
          <div className="mb-6 text-3xl font-light text-center text-gray-800 ">
            Give us Your Valuable Review!
          </div>
          <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
            <div className="col-span-2 lg:col-span-1">
              <div className="relative ">
                <input
                  type="text"
                  id="contact-form-name"
                  className=" rounded-lg  flex-1 appearance-none border border-gray-300 w-full py-2 px-4  text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your Name"
                  value={user?.displayName}
                  disabled
                />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                <input
                  type="number"
                  id="contact-form-email"
                  className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Rating 1-5"
                  required
                  min="1"
                  max="5"
                  onChange={(e) => setInputQuantity(e.target.value)}
                />
              </div>
            </div>
            <div className="col-span-2">
              <label className="text-gray-700" htmlFor="name">
                <textarea
                  className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none "
                  id="comment"
                  placeholder="Enter your comment"
                  name="comment"
                  rows="5"
                  cols="40"
                  required
                  {...register("comment")}
                ></textarea>
              </label>
            </div>
            <div className="col-span-2 text-right">
              <button
                type="submit"
                disabled={(inputQuantity < 1 || inputQuantity > 5) && !disabled}
                className=" border rounded-lg border-transparent text-white btn btn-primary flex justify-center items-center py-4  w-full"
              >
                <div>
                  <p className="text-base leading-4">Add Review</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
