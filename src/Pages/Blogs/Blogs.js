import React, { useState } from "react";

const Blogs = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto">
          <div role="article" className="bg-gray-100 py-12 md:px-8">
            <div className="px-4 xl:px-0 py-10">
              <div className="flex flex-col lg:flex-row flex-wrap">
                <div className="mt-4 lg:mt-0 lg:w-3/5">
                  <div>
                    <h1 className="text-3xl ml-2 lg:ml-0 lg:text-4xl font-bold text-gray-900 tracking-normal lg:w-11/12">
                      Frequently asked questions
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 xl:px-0">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-6 gap-8">
                <div role="cell" className="bg-gray-100">
                  <div className="bg-white p-5 rounded-md relative h-full w-full">
                    <h1 className="pb-4 text-2xl font-semibold">
                      How will you improve the performance of a React
                      Application?
                    </h1>
                    {/* <div className="my-5">
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12.5"
                          height={16}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        <h4 className="text-md text-gray-900 ">
                          First time, what do I do next?
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900 ">
                          Changing you profile picture and other information
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900  pl-4">
                          I didnt get a confirmation email, what should I do
                          next
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900  pl-4">
                          What is the refund policy if I have to cancel during
                          the month
                        </h4>
                      </div>
                    </div> */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam qui cupiditate quia cum dicta optio expedita repellendus illo ad eos omnis, ipsum non asperiores? Eum, voluptatem dolorem? Iste debitis ullam ipsam blanditiis commodi quam totam, officia itaque ex distinctio sit.</p>
                  </div>
                </div>
                <div role="cell" className="bg-gray-100">
                  <div className="bg-white p-5 rounded-md relative h-full w-full">
                    <h1 className="pb-4 text-2xl font-semibold">
                      What are the different ways to manage a state in a React
                      application?
                    </h1>
                    <div className="my-5">
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900  pl-4">
                          First time, what do I do next?
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900  pl-4">
                          Changing you profile picture and other information
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900  pl-4">
                          I didnt get a confirmation email, what should I do
                          next
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900  pl-4">
                          What is the refund policy if I have to cancel during
                          the month
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900  pl-4">
                          What is the refund policy?
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="cell" className="bg-gray-100">
                  <div className="bg-white p-5 rounded-md relative h-full w-full">
                    <h1 className="pb-4 text-2xl font-semibold">
                      How does prototypical inheritance work?
                    </h1>
                    <div className="my-5">
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900  pl-4">
                          First time, what do I do next?
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900  pl-4">
                          Changing you profile picture and other information
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900  pl-4">
                          I didnt get a confirmation email, what should I do
                          next
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900  pl-4">
                          What is the refund policy if I have to cancel during
                          the month
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="cell" className="bg-gray-100">
                  <div className="bg-white p-5 rounded-md  h-full relative w-full">
                    <h1 className="pb-4 text-2xl font-semibold">
                      What is a unit test? Why should write unit tests?
                    </h1>
                    <div className="my-5">
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900  pl-4">
                          First time, what do I do next?
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900  pl-4">
                          Changing you profile picture and other information
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900  pl-4">
                          I didnt get a confirmation email, what should I do
                          next
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900  pl-4">
                          What is the refund policy if I have to cancel during
                          the month
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="cell" className="bg-gray-100">
                  <div className=" bg-white p-5 rounded-md relative h-full w-full">
                    <h1 className="pb-4 text-2xl font-semibold">
                      Profile Preferences
                    </h1>
                    <div className="my-5">
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900  pl-4">
                          First time, what do I do next?
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900  pl-4">
                          Changing you profile picture and other information
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900  pl-4">
                          I didnt get a confirmation email, what should I do
                          next
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="cell" className="bg-gray-100">
                  <div className=" bg-white p-5 rounded-md relative h-full  w-full">
                    <h1 className="pb-4 text-2xl font-semibold">
                      Privacy and Cookies
                    </h1>
                    <div className="my-5">
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900  pl-4">
                          First time, what do I do next?
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900  pl-4">
                          Changing you profile picture and other information
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900  pl-4">
                          I didnt get a confirmation email, what should I do
                          next
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-900  pl-4">
                          What is the refund policy if I have to cancel during
                          the month
                        </h4>
                      </div>
                    </div>
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

export default Blogs;
