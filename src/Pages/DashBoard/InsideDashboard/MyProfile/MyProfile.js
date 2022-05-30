import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faLocationDot,
  faEnvelope,
  faPhoneFlip,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { useForm } from "react-hook-form";
import auth from "../../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import fetcher from "../../../Shared/api/axios.config";
import Loading from "../../../Shared/Loading/Loading";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const { displayName, email, photoURL } = user;

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () => fetcher.get(`/user?email=${user.email}`));

  const userData = users?.data[0];

  const onSubmit = (data) => {
    const currentUser = {
      name: displayName,
      email: email,
      linkedin: data?.linkedin,
      number: data?.number,
      location: data?.location,
      education: data?.education,
    };
    const res = fetcher.put(`/user/${email}`, currentUser);
    res.then((response) => {
      const { data } = response;

      if (data?.result?.modifiedCount > 0) {
        refetch();
        toast.success("Profile Updated", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    });
    reset();
  };

  return (
    <div>
      {/* form start */}

      <div className="text-gray-600 body-font"></div>

      <div className="hero">
        <div className="hero-content flex-col lg:flex-row gap-14">
          <div className="max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg my-6">
            <div className="avatar flex justify-center pt-6 pb-2">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                {photoURL ? (
                  <img src={photoURL} alt="" />
                ) : (
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                    alt=""
                  />
                )}
              </div>
            </div>

            <div className="card w-96">
              <div className="card-body">
                <h1 className="text-xl font-semibold ">{displayName}</h1>
                <div className="flex items-center mt-4 text-gray-700 ">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <h1 className="px-2 text-sm">Email: {email}</h1>
                </div>
                <div className="flex items-center mt-4 text-gray-700 ">
                  <FontAwesomeIcon icon={faGraduationCap} />
                  <h1 className="px-2 text-sm">
                    Education: {userData?.education}
                  </h1>
                </div>
                <div className="flex items-center mt-4 text-gray-700 ">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <h1 className="px-2 text-sm">
                    Location: {userData?.location}
                  </h1>
                </div>
                <div className="flex items-center mt-4 text-gray-700 ">
                  <FontAwesomeIcon icon={faPhoneFlip} />
                  <h1 className="px-2 text-sm">
                    Phone number: {userData?.number}
                  </h1>
                </div>
                <div className="flex items-center mt-4 text-gray-700 ">
                  <FontAwesomeIcon icon={faLinkedin} />
                  <h1 className="px-2 text-sm">
                    LinkedIn Account:{" "}
                    <a
                      href={userData?.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      https://www.linkedin.com/in/..
                    </a>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card flex-shrink-0 w-96 max-w-sm shadow-lg bg-base-100">
              <div className="card-body">
                <h1 className="text-xl font-semibold ">Update Your Profile</h1>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    value={displayName}
                    disabled
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    value={email}
                    disabled
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Education"
                    className="input input-bordered"
                    required
                    {...register("education")}
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Location/City"
                    className="input input-bordered"
                    required
                    {...register("location")}
                  />
                </div>
                <div className="form-control">
                  <input
                    type="number"
                    placeholder="Number"
                    className="input input-bordered"
                    required
                    {...register("number")}
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Linkdin Account Link"
                    className="input input-bordered"
                    required
                    {...register("linkedin")}
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Update</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
