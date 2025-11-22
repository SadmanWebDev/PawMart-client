import React from "react";
import errorImg from "/404 Error with a cute animal-pana.png";
import { Link } from "react-router";
import { FaPaw } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="bg-[#FEF3F0] min-h-screen flex items-center">
      <div className="flex flex-col md:flex-row justify-center items-center max-w-6xl mx-auto p-4">
        <div className="max-w-[700px]">
          <img src={errorImg} alt="404 Error Illustration" className="w-full" />
        </div>
        <div className="text-center md:text-left text-black">
          <h1 className="font-extrabold text-4xl mb-6">Oops...</h1>
          <h2 className="font-medium text-4xl mb-5">Page not found</h2>
          <p className="mb-4">
            Don't worry, you can still find your pet. First, let's go back to
            the Homepage!
          </p>
          <Link to="/">
            <button className="btn bg-orange-700 hover:bg-orange-600 text-white rounded-xl w-1/3  gap-2">
              Go Home <FaPaw className="rotate-45" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
