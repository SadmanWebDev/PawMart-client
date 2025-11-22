import { useState } from "react";
import { useParams } from "react-router";
import Loader from "../../components/Loader/Loader";
import ProductCard from "../../components/ProductCard/ProductCard";

const CategoryFiltered = () => {
  const { categoryName } = useParams();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  fetch(
    `https://pawmart-server-tawny.vercel.app/api/listings/category/${categoryName}`
  )
    .then((res) => res.json())
    .then((data) => {
      setListings(data);
      setLoading(false);
    });

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center py-15 rounded-2xl text-gray-700 mb-12 bg-[#FEF3F0]">
          <h1 className="text-3xl md:text-5xl font-bold">{categoryName}</h1>
          <p className="text-lg mt-5">
            Browse all available {categoryName.toLowerCase()}
          </p>
        </div>
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <Loader></Loader>
          ) : listings.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-2xl text-orange-700">
                No listings found in this category 😞
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listings.map((listing, index) => (
                <ProductCard listing={listing} index={index}></ProductCard>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryFiltered;
