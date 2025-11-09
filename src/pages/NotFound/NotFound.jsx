import React from "react";
import errorImg from "/404 Error with a cute animal-pana.png";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="bg-[#FEF3F0]">
      <div className="flex justify-center items-center max-w-11/12 mx-auto">
        <div className="">
        <h1 className="font-extrabold text-4xl mb-6">Opss...</h1>
        <h2 className="font-medium text-4xl mb-5">Page not found</h2>
        <p className="mb-4">
          Don't worry, you can still find your pet. First, let's go back to the Homepage!
        </p>
        <Link to='/'><button className="btn bg-[#D75239] text-white rounded-xl w-1/3">Go Home </button></Link>
      </div>
      <div className="w-[750px]">
        <img src={errorImg} alt="" />
      </div>
      </div>
    </div>
  );
};

export default NotFound;
