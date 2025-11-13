import { useState, use } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Auth/AuthContext";

const AddListing = () => {
  const { user } = use(AuthContext);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "Select",
    price: "",
    location: "",
    description: "",
    image: "",
    date: "",
    email: user?.email || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setFormData((prev) => ({
      ...prev,
      category: category,
      price: category === "Pets" ? "0" : prev.price,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const listingData = {
        ...formData,
        price: parseInt(formData.price),
        email: user.email,
      };

      await axios.post(
        "https://pawmart-server-tawny.vercel.app/api/listings",
        listingData
      );
      toast.success("Listing added successfully!");
    } catch (error) {
      toast.error("Error adding listing");
    } finally {
      setLoading(false);
    }
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-pawmart-light py-12">
      <Toaster />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h1 className="text-3xl font-bold text-pawmart-dark font-heading mb-8 text-center">
              Add New Listing
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Product/Pet Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g., Golden Retriever Puppy"
                    className="input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Category</span>
                  </label>
                  <select
                    name="category"
                    className="select select-bordered focus:"
                    value={formData.category}
                    onChange={handleCategoryChange}
                    required
                  >
                    <option value="Select">Select Category</option>
                    <option value="Pets">Pets</option>
                    <option value="Food">Pet Food</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Care Products">Care Products</option>
                  </select>
                </div>

                {/* Price */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Price ($)</span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    placeholder="Enter price"
                    className="input input-bordered focus:border-pawmart-orange"
                    value={formData.price}
                    onChange={handleChange}
                    readOnly={formData.category === "Pets"}
                    required
                  />
                  {formData.category === "Pets" && (
                    <label className="label">
                      <span className="label-text-alt text-gray-500">
                        Free for adoption
                      </span>
                    </label>
                  )}
                </div>

                {/* Location */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Location </span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="e.g., Dhaka"
                    className="input input-bordered focus:border-pawmart-orange"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Date */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Pick Up Date *
                    </span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="input input-bordered focus:border-pawmart-orange"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="input input-bordered bg-gray-100"
                    value={user?.email || ""}
                    readOnly
                  />
                </div>
              </div>

              {/* Image URL */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Image URL</span>
                </label>
                <input
                  type="url"
                  name="image"
                  placeholder="https://example.com/image.jpg"
                  className="input input-bordered focus:"
                  value={formData.image}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Description</span>
                </label>
                <textarea
                  name="description"
                  placeholder="Provide detailed description..."
                  className="textarea textarea-bordered h-32 focus:"
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn w-full bg-orange-600 text-white border-none text-lg"
                disabled={loading}
              >
                {loading ? "Adding Listing..." : "Add Listing"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddListing;
