import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import ProductCard from "../ProductCard/ProductCard";
import Loader from "../Loader/Loader";

const RecentListings = () => {
  const [recentListings, setRecentListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://pawmart-server-tawny.vercel.app/api/listings/recent")
      .then((res) => res.json())
      .then((data) => {
        setRecentListings(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-11/12 mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-7 md:mb-10">
        <p className="text-orange-600 mb-5 text-lg md:text-xl">
          Latest Arrivals
        </p>
        <h1 className="text-gray-600 text-3xl md:text-5xl font-bold">
          Recent Listings
        </h1>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {recentListings.map((listing) => (
            <ProductCard listing={listing}></ProductCard>
          ))}
        </div>
      )}
      </div>
    </div>
  );
};

export default RecentListings;
