import { useState, useEffect, use } from "react";
import { useParams, useNavigate } from "react-router";
import { AuthContext } from "../Auth/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendar, FaTag, FaEnvelope } from "react-icons/fa";

const ListingDetails = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [orderData, setOrderData] = useState({
    buyerName: user?.displayName || "",
    email: user?.email || "",
    quantity: 1,
    address: "",
    phone: "",
    date: "",
    additionalNotes: "",
  });

  useEffect(() => {
    document.title = "Listing Details - PawMart";
    fetchListing();
  }, [id]);

  const fetchListing = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/listings/${id}`
      );
      setListing(response.data);
      setLoading(false);
    } catch (error) {
      toast.error("Error fetching listing details");
      setLoading(false);
    }
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();

    try {
      const order = {
        productId: listing._id,
        productName: listing.name,
        buyerName: orderData.buyerName,
        email: user.email,
        quantity:
          listing.category === "Pets" ? 1 : parseInt(orderData.quantity),
        price: listing.price,
        address: orderData.address,
        phone: orderData.phone,
        date: orderData.date,
        additionalNotes: orderData.additionalNotes,
      };

      await axios.post("http://localhost:3000/api/orders", order);
      toast.success("Order placed successfully!");
      setShowOrderModal(false);
      navigate("/my-orders");
    } catch (error) {
      toast.error("Error placing order");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!listing) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Listing not found</p>
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
          className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Section */}
            <div className="h-96 lg:h-auto">
              <img
                src={listing.image}
                alt={listing.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details Section */}
            <div className="p-8 space-y-6">
              <div>
                <span className="badge bg-pawmart-orange text-white mb-2">
                  {listing.category}
                </span>
                <h1 className="text-3xl font-bold text-pawmart-dark font-heading">
                  {listing.name}
                </h1>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <FaMapMarkerAlt className="text-pawmart-orange" />
                  <span>{listing.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <FaCalendar className="text-pawmart-orange" />
                  <span>Available from: {listing.date}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <FaEnvelope className="text-pawmart-orange" />
                  <span>{listing.email}</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-pawmart-dark mb-2">
                  Description
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {listing.description}
                </p>
              </div>

              <div className="pt-4 border-t">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Price</p>
                    <p className="text-3xl font-bold text-pawmart-orange">
                      {listing.price === 0
                        ? "Free for Adoption"
                        : `৳${listing.price}`}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setShowOrderModal(true)}
                  className="btn w-full bg-pawmart-orange hover:bg-orange-600 text-white border-none text-lg"
                >
                  {listing.category === "Pets" ? "Adopt Now" : "Order Now"}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Order Modal */}
        {showOrderModal && (
          <div className="modal modal-open">
            <div className="modal-box max-w-2xl">
              <h3 className="font-bold text-2xl text-pawmart-dark mb-6">
                Place Order
              </h3>
              <form onSubmit={handleOrderSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">
                        Buyer Name
                      </span>
                    </label>
                    <input
                      type="text"
                      className="input input-bordered bg-gray-100"
                      value={orderData.buyerName}
                      readOnly
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Email</span>
                    </label>
                    <input
                      type="email"
                      className="input input-bordered bg-gray-100"
                      value={user.email}
                      readOnly
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">
                        Product Name
                      </span>
                    </label>
                    <input
                      type="text"
                      className="input input-bordered bg-gray-100"
                      value={listing.name}
                      readOnly
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Quantity</span>
                    </label>
                    <input
                      type="number"
                      className="input input-bordered"
                      value={
                        listing.category === "Pets" ? 1 : orderData.quantity
                      }
                      onChange={(e) =>
                        setOrderData({ ...orderData, quantity: e.target.value })
                      }
                      readOnly={listing.category === "Pets"}
                      min="1"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Price</span>
                    </label>
                    <input
                      type="text"
                      className="input input-bordered bg-gray-100"
                      value={listing.price === 0 ? "Free" : `৳${listing.price}`}
                      readOnly
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">
                        Pick Up Date
                      </span>
                    </label>
                    <input
                      type="date"
                      className="input input-bordered"
                      value={orderData.date}
                      onChange={(e) =>
                        setOrderData({ ...orderData, date: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-control md:col-span-2">
                    <label className="label">
                      <span className="label-text font-semibold">Phone</span>
                    </label>
                    <input
                      type="tel"
                      className="input input-bordered"
                      placeholder="017xxxxxxxx"
                      value={orderData.phone}
                      onChange={(e) =>
                        setOrderData({ ...orderData, phone: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-control md:col-span-2">
                    <label className="label">
                      <span className="label-text font-semibold">Address</span>
                    </label>
                    <textarea
                      className="textarea textarea-bordered"
                      placeholder="Your delivery address"
                      value={orderData.address}
                      onChange={(e) =>
                        setOrderData({ ...orderData, address: e.target.value })
                      }
                      required
                    ></textarea>
                  </div>
                  <div className="form-control md:col-span-2">
                    <label className="label">
                      <span className="label-text font-semibold">
                        Additional Notes
                      </span>
                    </label>
                    <textarea
                      className="textarea textarea-bordered"
                      placeholder="Any special instructions..."
                      value={orderData.additionalNotes}
                      onChange={(e) =>
                        setOrderData({
                          ...orderData,
                          additionalNotes: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>
                </div>
                <div className="modal-action">
                  <button
                    type="button"
                    className="btn"
                    onClick={() => setShowOrderModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn bg-pawmart-orange hover:bg-orange-600 text-white border-none"
                  >
                    Confirm Order
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

export default ListingDetails;
