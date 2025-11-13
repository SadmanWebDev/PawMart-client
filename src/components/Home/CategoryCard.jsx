import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CategoryCard = ({ image, title }) => {
  return (
    <div className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <img src={image} alt={title} className="w-full h-64 object-cover" />

      {/* Vertical Text */}
      <div className="absolute top-1/2 left-2 -translate-y-1/2 rotate-[-90deg]">
        <h2 className="text-xl font-semibold text-gray-700 tracking-wide">
          {title}
        </h2>
      </div>

      {/* Button (bottom-right) */}
      <button className="absolute bottom-3 right-3 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-md transition-all duration-300">
        <FaArrowRight />
      </button>
    </div>
  );
};

export default CategoryCard;
