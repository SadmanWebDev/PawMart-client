import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const RecentListings = () => {
  const [recentListings, setRecentListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Home - PawMart";
    fetchRecentListings();
  }, []);

  const fetchRecentListings = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/listings/recent"
      );
      setRecentListings(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching listings:", error);
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="py-16 bg-pawmart-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-pawmart-orange font-semibold uppercase tracking-wider mb-2">
              Latest Arrivals
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-pawmart-dark font-heading">
              Recent Listings
            </h2>
          </div>

          {loading ? (
            <div className="flex justify-center">
              <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentListings.map((listing, index) => (
                <motion.div
                  key={listing._id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <figure className="h-64 overflow-hidden">
                    <img
                      src={listing.image}
                      alt={listing.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </figure>
                  <div className="card-body">
                    <h3 className="card-title text-pawmart-dark font-heading">
                      {listing.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="badge badge-sm bg-pawmart-orange text-white">
                        {listing.category}
                      </span>
                      <span>📍 {listing.location}</span>
                    </div>
                    <p className="text-xl font-bold text-pawmart-orange">
                      {listing.price === 0
                        ? "Free for Adoption"
                        : `৳${listing.price}`}
                    </p>
                    <Link
                      to={`/listing/${listing._id}`}
                      className="btn bg-pawmart-orange hover:bg-orange-600 text-white border-none mt-4"
                    >
                      See Details
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentListings;
