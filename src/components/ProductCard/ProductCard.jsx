import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { PiShoppingCartThin } from "react-icons/pi";
import { Link } from "react-router";
import { motion } from "framer-motion";

const ProductCard = ({ listing, index }) => {
  /* <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Card Title
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div> */
  return (
    <motion.div
      key={listing._id}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
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
