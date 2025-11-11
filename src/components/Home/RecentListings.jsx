import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import ProductCard from "../ProductCard/ProductCard";

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
        "https://pawmart-server-tawny.vercel.app/api/listings/recent"
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
                <motion
                  key={listing._id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProductCard listing={listing}></ProductCard>
                </motion>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentListings;
