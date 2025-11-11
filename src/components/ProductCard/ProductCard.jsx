import React from "react";
import { ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router";
const ProductCard = ({ listing }) => {
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl p-6 shadow-lg relative">
        {/* Sale Badge */}
        <div className="absolute top-6 right-6">
          <span className="bg-red-400 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
            SALE
          </span>
        </div>

        {/* Product Image Container */}
        <div className="bg-white rounded-2xl p-8 mb-6 flex items-center justify-center min-h-[280px]">
          <div className="relative">
            {/* Dog Tag */}
            <img src={listing.image} alt="" />
          </div>
        </div>

        {/* Rating */}
        <div className="flex gap-1 mb-3">
          {[1, 2, 3, 4].map((star) => (
            <Star
              key={star}
              className="w-6 h-6 fill-yellow-400 text-yellow-400"
            />
          ))}
          <Star className="w-6 h-6 fill-gray-300 text-gray-300" />
        </div>

        {/* Product Title */}
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          {listing.name}
        </h3>
        <span className="bg-red-400 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
          {listing.category}
        </span>
        <span>📍 {listing.location}</span>
        {/* Price and Cart Container */}
        <div className="flex items-center justify-between">
          {/* Price */}
          <div className="text-lg font-semibold text-gray-800">
            <p className="text-xl font-bold text-pawmart-orange">
              {listing.price === 0 ? "Free for Adoption" : `$${listing.price}`}
            </p>
          </div>

          {/* Cart Button */}
          <Link to={`/listing/${listing._id}`}>
            <button className="bg-red-400 hover:bg-red-500 text-white rounded-full p-4 shadow-lg transition-all hover:scale-105 active:scale-95">
              <ShoppingCart className="w-6 h-6" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
