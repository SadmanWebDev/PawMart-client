import { useState, useEffect, use } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { AuthContext } from "../Auth/AuthContext";
import Loader from "../../components/Loader/Loader";
import Swal from "sweetalert2";

const MyListings = () => {
  const { user } = use(AuthContext);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [updateData, setUpdateData] = useState({});

  const myListings = () => {
    fetch(
      `https://pawmart-server-tawny.vercel.app/api/my-listings/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setListings(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (user?.email) {
      myListings();
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://pawmart-server-tawny.vercel.app/api/listings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            myListings();
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your item has been deleted.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  const handleUpdateClick = (listing) => {
    setUpdateData({
      name: listing.name,
      category: listing.category,
      location: listing.location,
      description: listing.description,
      image: listing.image,
      date: listing.date,
      id: listing._id,
    });
    setShowModal(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const location = form.location.value;
    const description = form.description.value;
    const email = user.email;
    const updatedListing = {
      name,
      category,
      location,
      description,
      email,
    };

    fetch(
      `https://pawmart-server-tawny.vercel.app/api/listings/${updateData.id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(updatedListing),
      }
    )
      .then((res) => res.json())
      .then(() => {
        toast.success("Listing updated successfully!");
        setShowModal(false);
        myListings();
      });
  };

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="py-12">
      <Toaster />
      <div className="container mx-auto px-4">
        <div className="text-center py-15 rounded-2xl text-gray-700 mb-12 bg-[#FEF3F0]">
          <h1 className="text-3xl md:text-5xl font-bold">My Listings</h1>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto bg-[#FEF3F0] p-10 rounded-2xl shadow-2xl"
        >
          {listings.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-2xl font-semibold text-orange-700">
                You haven't added any listing yet
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {listings.map((listing) => (
                    <tr key={listing._id}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img src={listing.image} alt={listing.name} />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{listing.name}</div>
                            <div className="text-sm opacity-50">
                              {listing.category}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{listing.location}</td>
                      <td>
                        {listing.price === 0 ? "Free" : `$${listing.price}`}
                      </td>
                      <td>{listing.date}</td>
                      <td className="space-x-2">
                        <button
                          onClick={() => handleUpdateClick(listing)}
                          className="btn rounded-2xl bg-blue-500 hover:bg-blue-600 text-white border-none btn-xs"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => handleDelete(listing._id)}
                          className="btn rounded-2xl bg-red-500 hover:bg-red-600 text-white border-none btn-xs"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>
        {showModal && (
          <div className="modal modal-open">
            <div className="modal-box max-w-2xl pt-0">
              <div className="bg-orange-700 pt-6 pb-1 mb-5 rounded-b-2xl">
                <h3 className="font-bold text-3xl text-center text-white mb-6">
                  Update Listing
                </h3>
              </div>
              <form onSubmit={handleUpdate} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label
                      className="label
                       font-semibold"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="input border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-700"
                      defaultValue={updateData.name}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label
                      className="label
                       font-semibold"
                    >
                      Category
                    </label>
                    <select
                      name="category"
                      className="select border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-700"
                      defaultValue={updateData.category}
                      required
                    >
                      <option value="Pets">Pets</option>
                      <option value="Food">Pet Food</option>
                      <option value="Accessories">Accessories</option>
                      <option value="Care Products">Care Products</option>
                    </select>
                  </div>
                  <div className="form-control">
                    <label
                      className="label
                       font-semibold"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      className="input border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-700"
                      defaultValue={updateData.location}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label
                      className="label
                        font-semibold"
                    >
                      Description
                    </label>
                    <textarea
                      name="description"
                      className="textarea border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-700"
                      defaultValue={updateData.description}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="modal-action">
                  <button
                    type="button"
                    className="btn btn-outline rounded-2xl hover:bg-orange-700 hover:text-white border-orange-700"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn bg-orange-700 rounded-2xl hover:bg-orange-600 text-white border-none"
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
