import { useState, useEffect, use } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AuthContext } from "../Auth/AuthContext";

const MyListings = () => {
  const { user } = use(AuthContext);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedListing, setSelectedListing] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateData, setUpdateData] = useState({});

  useEffect(() => {
    document.title = "My Listings - PawMart";
    fetchMyListings();
  }, [user]);

  const fetchMyListings = async () => {
    try {
      const response = await axios.get(
        `https://pawmart-server-tawny.vercel.app/api/my-listings/${user.email}`
      );
      setListings(response.data);
      setLoading(false);
    } catch (error) {
      toast.error("Error fetching listings");
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this listing?")) {
      try {
        await axios.delete(
          `https://pawmart-server-tawny.vercel.app/api/listings/${id}`
        );
        toast.success("Listing deleted successfully!");
        fetchMyListings();
      } catch (error) {
        toast.error("Error deleting listing");
      }
    }
  };

  const handleUpdateClick = (listing) => {
    setSelectedListing(listing);
    setUpdateData({
      name: listing.name,
      category: listing.category,
      price: listing.price,
      location: listing.location,
      description: listing.description,
      image: listing.image,
      date: listing.date,
    });
    setShowUpdateModal(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedListing = {
        ...updateData,
        price: parseInt(updateData.price),
        email: user.email,
      };
      await axios.put(
        `https://pawmart-server-tawny.vercel.app/api/listings/${selectedListing._id}`,
        updatedListing
      );
      toast.success("Listing updated successfully!");
      setShowUpdateModal(false);
      fetchMyListings();
    } catch (error) {
      toast.error("Error updating listing");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pawmart-light py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-pawmart-dark font-heading mb-8 text-center">
            My Listings
          </h1>

          {listings.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                You haven't added any listings yet
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-xl overflow-x-auto">
              <table className="table">
                <thead className="bg-pawmart-orange text-white">
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {listings.map((listing) => (
                    <tr key={listing._id} className="hover">
                      <td>
                        <div className="avatar">
                          <div className="mask mask-squircle w-16 h-16">
                            <img src={listing.image} alt={listing.name} />
                          </div>
                        </div>
                      </td>
                      <td className="font-semibold">{listing.name}</td>
                      <td>
                        <span className="badge badge-sm bg-pawmart-orange text-white">
                          {listing.category}
                        </span>
                      </td>
                      <td className="font-bold text-pawmart-orange">
                        {listing.price === 0 ? "Free" : `৳${listing.price}`}
                      </td>
                      <td>{listing.location}</td>
                      <td>{listing.date}</td>
                      <td>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleUpdateClick(listing)}
                            className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white border-none"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => handleDelete(listing._id)}
                            className="btn btn-sm bg-red-500 hover:bg-red-600 text-white border-none"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>

        {/* Update Modal */}
        {showUpdateModal && (
          <div className="modal modal-open">
            <div className="modal-box max-w-2xl">
              <h3 className="font-bold text-2xl text-pawmart-dark mb-6">
                Update Listing
              </h3>
              <form onSubmit={handleUpdate} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Name</span>
                    </label>
                    <input
                      type="text"
                      className="input input-bordered focus:border-pawmart-orange"
                      value={updateData.name}
                      onChange={(e) =>
                        setUpdateData({ ...updateData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Category</span>
                    </label>
                    <select
                      className="select select-bordered focus:border-pawmart-orange"
                      value={updateData.category}
                      onChange={(e) =>
                        setUpdateData({
                          ...updateData,
                          category: e.target.value,
                        })
                      }
                      required
                    >
                      <option value="Pets">Pets</option>
                      <option value="Food">Pet Food</option>
                      <option value="Accessories">Accessories</option>
                      <option value="Care Products">Care Products</option>
                    </select>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Price</span>
                    </label>
                    <input
                      type="number"
                      className="input input-bordered focus:border-pawmart-orange"
                      value={updateData.price}
                      onChange={(e) =>
                        setUpdateData({ ...updateData, price: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Location</span>
                    </label>
                    <input
                      type="text"
                      className="input input-bordered focus:border-pawmart-orange"
                      value={updateData.location}
                      onChange={(e) =>
                        setUpdateData({
                          ...updateData,
                          location: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Description
                    </span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-24 focus:border-pawmart-orange"
                    value={updateData.description}
                    onChange={(e) =>
                      setUpdateData({
                        ...updateData,
                        description: e.target.value,
                      })
                    }
                    required
                  ></textarea>
                </div>
                <div className="modal-action">
                  <button
                    type="button"
                    className="btn"
                    onClick={() => setShowUpdateModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn bg-pawmart-orange hover:bg-orange-600 text-white border-none"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyListings;
