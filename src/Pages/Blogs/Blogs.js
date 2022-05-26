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

                    <p>
                      We can improve the performance of a React Application in
                      different ways. Some of are Keeping component state local
                      where necessary, Memoizing React components to prevent
                      unnecessary re-renders, Code-splitting in React using
                      dynamic import(), Windowing or list virtualization in
                      React applications, Lazy loading images in React
                    </p>
                  </div>
                </div>
                <div role="cell" className="bg-gray-100">
                  <div className="bg-white p-5 rounded-md relative h-full w-full">
                    <h1 className="pb-4 text-2xl font-semibold">
                      What are the different ways to manage a state in a React
                      application?
                    </h1>
                    <p>
                      Some ways to manage a state in a React application: <br />
                      1. Local (UI) state: Local state is data we manage in one
                      or another component. Local state is most often managed in
                      React using the useState hook. <br /> 2. Global (UI)
                      state: Global state is data we manage across multiple
                      components.
                    </p>
                  </div>
                </div>

                <div role="cell" className="bg-gray-100">
                  <div className="bg-white p-5 rounded-md  h-full relative w-full">
                    <h1 className="pb-4 text-2xl font-semibold">
                      What is a unit test? Why should write unit tests?
                    </h1>
                    <p>
                      Unit testing allows software developers to actually think
                      through the design of the software and what has to be done
                      before they write the code. This can help them to stay
                      focused and can also help them to create much better
                      designs. Testing a code early on can help to define what
                      that piece of code is really responsible for.
                    </p>
                  </div>
                </div>
                <div role="cell" className="bg-gray-100">
                  <div className=" bg-white p-5 rounded-md relative h-full w-full">
                    <h1 className="pb-4 text-2xl font-semibold">
                      Why you do not set the state directly in React.?
                    </h1>
                    <p>
                      Directly modifying state is not recommended as react will
                      not come to know of the change and it will not cause a
                      rerender. All the diffing happens on Virtual DOM and react
                      only updates the change attributes to Browser. when we
                      update the state of a component all it's children are
                      going to be rendered as well. or our entire component tree
                      rendered. but when i say our entire component tree is
                      rendered that doesn’t mean that the entire DOM is updated.
                      when a component is rendered we basically get a react
                      element, so that is updating our virtual dom. React will
                      then look at the virtual DOM, it also has a copy of the
                      old virtual DOM, that is why we shouldn’t set the state
                      directly in React
                    </p>
                  </div>
                </div>
                <div role="cell" className="bg-gray-100">
                  <div className=" bg-white p-5 rounded-md relative h-full w-full">
                    <h1 className="pb-4 text-2xl font-semibold">
                      How does prototypical inheritance work?
                    </h1>
                    <p>
                      The Prototypal Inheritance is a feature in javascript used
                      to add methods and properties in objects. It is a method
                      by which an object can inherit the properties and methods
                      of another object. Traditionally, in order to get and set
                      the [Prototype] of an object, we use Object.getPrototypeOf
                      and Object.setPrototypeOf.
                    </p>
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
