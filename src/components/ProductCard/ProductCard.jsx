import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { PiShoppingCartThin } from "react-icons/pi";
import { Link } from "react-router";
import { motion } from "framer-motion";

const ProductCard = ({ listing }) => {
  return (
    <motion.div
      key={listing._id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="w-full">
        <div className="bg-[#FEF3F0] rounded-3xl p-5 shadow-lg relative">
          <div className="absolute top-6 right-6">
            <span className="bg-orange-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
              SALE
            </span>
          </div>
          <div className="bg-white rounded-2xl mb-6">
            <div className="">
              <img
                src={listing.image}
                alt={listing.name}
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            {listing.name}
          </h3>
          <span className="bg-orange-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
            {listing.category}
          </span>
          <div className="flex mt-5 gap-2 text-center">
            <FaLocationDot className="text-orange-700" />
            <h4>{listing.location}</h4>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold text-gray-800">
              <p className="text-xl font-bold">
                {listing.price === 0
                  ? "Free for Adoption"
                  : `$${listing.price}`}
              </p>
            </div>
            <Link to={`/listing/${listing._id}`}>
              <button className="btn btn-circle btn-lg bg-orange-700 hover:bg-orange-600 border-none text-white font-bold">
                <PiShoppingCartThin size={24} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default ProductCard;
