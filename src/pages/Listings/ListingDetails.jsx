import { useState, useEffect, use } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Auth/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendar, FaEnvelope } from "react-icons/fa";
import Loader from "../../components/Loader/Loader";

const ListingDetails = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showOrderModal, setShowOrderModal] = useState(false);

  useEffect(() => {
    fetch(`https://pawmart-server-tawny.vercel.app/api/listings/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setListing(data);
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const productId = listing._id;
    const productName = listing.name;
    const productImg = listing.image;
    const buyerName = user?.displayName;
    const email = user.email;
    const quantity = form.quantity.value;
    const price = listing.price;
    const address = form.address.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const additionalNotes = form.note.value;
    const order = {
      productId,
      productName,
      productImg,
      buyerName,
      email,
      quantity,
      price,
      address,
      phone,
      date,
      additionalNotes,
    };

    fetch("https://pawmart-server-tawny.vercel.app/api/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Order placed successfully!");
        setShowOrderModal(false);
        form.reset();
      });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen max-w-7xl mx-auto py-12 px-4">
      <Toaster />
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#fef3f0] rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-96 lg:h-auto">
              <img
                src={listing.image}
                alt={listing.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 space-y-6">
              <div>
                <span className="bg-orange-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                  {listing.category}
                </span>
                <h1 className="text-3xl font-bold text-gray-700 mt-2">
                  {listing.name}
                </h1>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <FaMapMarkerAlt className="text-orange-700" />
                  <span>{listing.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <FaCalendar className="text-orange-700" />
                  <span>Available from: {listing.date}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <FaEnvelope className="text-orange-700" />
                  <span>{listing.email}</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  Description
                </h3>
                <p className="text-gray-600">{listing.description}</p>
              </div>
              <div className="pt-4 border-t">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-gray-600">Price</p>
                    <p className="text-3xl font-bold text-orange-700">
                      {listing.price === 0
                        ? "Free for Adoption"
                        : `$${listing.price}`}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowOrderModal(true)}
                  className="btn w-full bg-orange-700 rounded-2xl hover:bg-orange-600 text-white border-none text-lg"
                >
                  {listing.category === "Pets" ? "Adopt Now" : "Order Now"}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
        {showOrderModal && (
          <div className="modal modal-open">
            <div className="modal-box pt-0 max-w-2xl">
              <div className="bg-orange-700 pt-6 pb-1 mb-5 rounded-b-2xl">
                <h3 className="font-bold text-3xl text-center  text-white mb-6">
                  Place Order
                </h3>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label font-semibold">Buyer Name</label>
                    <input
                      type="text"
                      className="input border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-700"
                      value={user.displayName}
                      readOnly
                    />
                  </div>
                  <div className="form-control">
                    <label className="label font-semibold">Email</label>
                    <input
                      type="email"
                      className="input border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-700"
                      value={user.email}
                      readOnly
                    />
                  </div>
                  <div className="form-control">
                    <label className="label font-semibold">Product Name</label>
                    <input
                      type="text"
                      className="input border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-700"
                      value={listing.name}
                      readOnly
                    />
                  </div>
                  <div className="form-control">
                    <label className="label font-semibold">Quantity</label>
                    <input
                      type="number"
                      name="quantity"
                      className="input border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-700"
                      readOnly={listing.category === "Pets"}
                      defaultValue={1}
                      min="1"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label font-semibold">Price</label>
                    <input
                      type="text"
                      className="input border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-700"
                      value={listing.price === 0 ? "Free" : `$${listing.price}`}
                      readOnly
                    />
                  </div>
                  <div className="form-control">
                    <label className="label font-semibold">Pick Up Date</label>
                    <input
                      type="date"
                      name="date"
                      className="input border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-700"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label font-semibold">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      className="input border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-700"
                      placeholder="017xxxxxxxx"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label font-semibold">Address</label>
                    <input
                      className=" input border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-700"
                      name="address"
                      placeholder="Your delivery address"
                      required
                    ></input>
                  </div>
                  <div className="form-control">
                    <label className="label font-semibold">
                      Additional Note
                    </label>
                    <input
                      className="input border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-700"
                      name="note"
                      placeholder="Any special instructions..."
                    ></input>
                  </div>
                </div>
                <div className="modal-action">
                  <button
                    type="button"
                    className="btn btn-outline rounded-2xl hover:bg-orange-700 hover:text-white border-orange-700"
                    onClick={() => setShowOrderModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn bg-orange-700 rounded-2xl hover:bg-orange-600 text-white border-none"
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
