import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useQuery } from "react-query";
import fetcher from "../../Shared/api/axios.config";
import Loading from "../../Shared/Loading/Loading";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Reviews = () => {
  //reviews loaded from database by axios custom api using react query
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    fetcher.get("/reviews")
  );

  if (isLoading) {
    return <Loading />;
  }

  const options = {
    margin: 20,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: true,
    navText: ["<", ">"],
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    rewind: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 3,

      }
    },
  };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-accent">
            Reviews
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-[36px] sm:block"
            >
              <defs>
                <pattern
                  id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative text-4xl">What</span>
          </span>{" "}
          Our Customers Says
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Our customer reviews are the best way to know what our customers think
          of our products
        </p>
      </div>

      <div className="">
        <OwlCarousel className='auto' {...options}>
          {reviews?.data?.map((review, index) => (

            <div key={index}>
              <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                <div>
                  <div className="">
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        review.rating > 0 ? "text-yellow-300" : "text-gray-300"
                      }
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        review.rating > 1 ? "text-yellow-300" : "text-gray-300"
                      }
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        review.rating > 2 ? "text-yellow-300" : "text-gray-300"
                      }
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        review.rating > 3 ? "text-yellow-300" : "text-gray-300"
                      }
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        review.rating > 4 ? "text-yellow-300" : "text-gray-300"
                      }
                    />
                  </div>
                  <p className=" text-sm text-gray-900 my-2">
                    Rating:{review.rating}
                  </p>
                  <p className=" text-sm text-gray-900">"{review.comment}"</p>
                </div>
                <p className="mt-0 pr-2  flex justify-end font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 text-blue-800">
                  __{review.name}
                </p>
              </div>
            </div>
          ))}
        </OwlCarousel >
      </div>
    </div >
  );
};

export default Reviews;
