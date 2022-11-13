import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <h1 className="mb-5 text-3xl font-bold">Contact me</h1>
      <div className="flex flex-row items-center justify-center">
        <div></div> {/* // TODO: somesort of image here */}
        <form action="" className="flex flex-col items-center">
          <label
            htmlFor="userName"
            className="relative block px-3 pt-3 mb-3 overflow-hidden bg-white border border-gray-200 rounded-md shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="text"
              id="userName"
              placeholder="Name"
              className="w-full h-8 p-0 text-black placeholder-transparent border-none peer focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span className="absolute text-xs text-gray-700 transition-all -translate-y-1/2 left-3 top-2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Name
            </span>
          </label>
          <label
            htmlFor="UserEmail"
            className="relative block px-3 pt-3 overflow-hidden bg-white border border-gray-200 rounded-md shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="email"
              id="UserEmail"
              placeholder="Email"
              className="w-full h-8 p-0 text-black placeholder-transparent border-none peer focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span className="absolute text-xs text-gray-700 transition-all -translate-y-1/2 left-3 top-2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Email
            </span>
          </label>

          <label htmlFor="clientQuery" className="p-2 font-bold text-white">
            Query:
          </label>
          <textarea
            className="mb-3 bg-white textarea w-54"
            placeholder=""
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default Contact;
