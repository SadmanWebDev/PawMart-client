import { useState, use } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Auth/AuthContext";

const AddListing = () => {
  const { user } = use(AuthContext);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = user.email;
    const category = form.category.value;
    const price = parseInt(form.price.value);
    const location = form.location.value;
    const image = form.image.value;
    const date = form.date.value;
    const description = form.description.value;
    const newListing = {
      name,
      email,
      category,
      price,
      location,
      image,
      date,
      description,
    };
    console.log(typeof price);
    setFormData(newListing);

    fetch("https://pawmart-server-tawny.vercel.app/api/listings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newListing),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Listing added successfully!");
        setLoading(false);
        form.reset();
      });
  };

  return (
    <div className="min-h-screen bg-[#fef3f0] py-12">
      <Toaster />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 pt-0"
          >
            <div className="">
              <div className="bg-orange-700 pt-6 pb-1 mb-5 rounded-b-2xl">
                <h3 className="font-bold text-3xl text-center  text-white mb-6">
                  Add New Listing
                </h3>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-control">
                    <label className="label font-semibold">
                      Product/Pet Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g., Golden Retriever Puppy"
                      className="input border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-700"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label font-semibold">Category</label>
                    <select
                      name="category"
                      className="select border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-700"
                      setCategory={category}
                      onChange={(e) => setCategory(e.target.value)}
                      required
                    >
                      <option value="">Select Category</option>
                      <option value="Pets">Pets</option>
                      <option value="Food">Pet Food</option>
                      <option value="Accessories">Accessories</option>
                      <option value="Care Products">Care Products</option>
                    </select>
                  </div>
                  <div className="form-control">
                    <label className="label font-semibold">Price ($)</label>
                    <input
                      type="number"
                      name="price"
                      placeholder="Enter price"
                      className="input border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-700"
                      value={category === "Pets" ? 0 : formData.price}
                      readOnly={category === "Pets"}
                      required
                    />
                    {category === "Pets" && (
                      <label className="label">
                        <span className="label-text-alt text-gray-500">
                          Free for adoption
                        </span>
                      </label>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label font-semibold">Location</label>
                    <input
                      type="text"
                      name="location"
                      placeholder="e.g., Rio"
                      className="input border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-700"
                      required
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
                    <label className="label font-semibold">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="input border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-700"
                      value={user?.email}
                      readOnly
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label font-semibold">Image URL</label>
                  <input
                    type="url"
                    name="image"
                    placeholder="https://example.com/image.jpg"
                    className="input border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-700"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label font-semibold">Description</label>
                  <textarea
                    name="description"
                    placeholder="Provide detailed description..."
                    className="textarea border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-700"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn w-full bg-orange-700 rounded-2xl hover:bg-orange-600 text-white border-none text-lg"
                  disabled={loading}
                >
                  {loading ? "Adding Listing..." : "Add Listing"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AddListing;
