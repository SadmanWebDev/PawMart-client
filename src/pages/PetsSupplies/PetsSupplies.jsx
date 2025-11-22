import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import ProductCard from "../../components/ProductCard/ProductCard";

const PetsSupplies = () => {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("https://pawmart-server-tawny.vercel.app/api/listings")
      .then((res) => res.json())
      .then((data) => {
        setListings(data);
        setFilteredListings(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = listings;
    if (selectedCategory !== "All") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    setFilteredListings(filtered);
  }, [selectedCategory, listings]);

  const categories = ["All", "Pets", "Food", "Accessories", "Care Products"];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center py-15 rounded-2xl text-gray-700 mb-12 bg-[#FEF3F0]">
          <h1 className="text-3xl md:text-5xl font-bold">Pets & Supplies</h1>
          <p className="text-lg mt-5">
            Browse through our extensive collection of pets and supplies
        </p>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-end mb-8">
            <div className="w-1/5">
              <div>
                <label className="label">
                  <span className="label-text font-semibold text-orange-600 mb-2">
                    Shop by Category
                  </span>
                </label>
                <select
                  className="select select-bordered w-full"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          {loading ? (
            <Loader />
          ) : filteredListings.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-2xl font-bold text-gray-600">
                No listings found
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredListings.map((listing, index) => (
                <div>
                  <ProductCard listing={listing} index={index} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PetsSupplies;
