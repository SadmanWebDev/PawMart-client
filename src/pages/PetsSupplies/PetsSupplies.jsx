import { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const PetsSupplies = () => {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    document.title = "Pets & Supplies - PawMart";
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      const response = await axios.get(
        "https://pawmart-server-tawny.vercel.app/api/listings"
      );
      setListings(response.data);
      setFilteredListings(response.data);
      setLoading(false);
    } catch (error) {
      toast.error("Error fetching listings");
      setLoading(false);
    }
  };

  useEffect(() => {
    let filtered = listings;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    setFilteredListings(filtered);
  }, [selectedCategory, listings]);

  const categories = ["All", "Pets", "Food", "Accessories", "Care Products"];

  return (
    <div className="min-h-screen bg-pawmart-light py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-pawmart-dark font-heading mb-4">
            Pets & Supplies
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our extensive collection of pets and supplies
          </p>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Category Filter */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Filter by Category
                </span>
              </label>
              <select
                className="select select-bordered w-full focus:border-pawmart-orange"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Listings Grid */}
        {loading ? (
          <div className="flex justify-center py-12">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : filteredListings.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No listings found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map((listing, index) => (
              <motion.div
                key={listing._id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
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
                  <p className="text-gray-600 line-clamp-2">
                    {listing.description}
                  </p>
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
  );
};

export default PetsSupplies;
