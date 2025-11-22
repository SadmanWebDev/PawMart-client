import { useState, useEffect, use } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { AuthContext } from "../Auth/AuthContext";
import Loader from "../../components/Loader/Loader";
import { IoCloudDownloadOutline } from "react-icons/io5";

const MyOrders = () => {
  const { user } = use(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://pawmart-server-tawny.vercel.app/api/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      });
  }, [user?.email]);

  const downloadPDF = () => {
    if (orders.length === 0) {
      toast.error("No orders available to download!");
      return;
    }
    const doc = new jsPDF();
    const tableData = orders.map((order) => [
      order.productName,
      order.quantity,
      order.price === 0 ? "Free" : `$${order.price}`,
      order.address,
      order.phone,
      order.date,
    ]);
    autoTable(doc, {
      head: [["Product", "Qty", "Price", "Address", "Phone", "Date"]],
      body: tableData,
    });
    doc.save("pawMart-orders.pdf");
    toast.success("Report downloaded successfully!");
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="py-12">
      <Toaster />
      <div className="container mx-auto px-4">
        <div className="text-center py-15 rounded-2xl text-gray-700 mb-12 bg-[#FEF3F0]">
          <h1 className="text-3xl md:text-5xl font-bold">My Orders</h1>
        </div>
        <div className="fab">
          <button
            onClick={downloadPDF}
            className="btn btn-lg btn-circle bg-orange-700 hover:bg-orange-600 text-white border-none"
          >
            <IoCloudDownloadOutline />
          </button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto bg-[#FEF3F0] p-10 rounded-2xl shadow-2xl"
        >
          {orders.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-2xl font-semibold text-orange-700">
                You haven't placed any order yet
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Buyer Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order._id} className="">
                      <td className="font-semibold">{order.productName}</td>
                      <td>{order.buyerName}</td>
                      <td className="text-center">{order.quantity}</td>
                      <td>{order.price === 0 ? "Free" : `$${order.price}`}</td>
                      <td>{order.address}</td>
                      <td>{order.phone}</td>
                      <td>{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default MyOrders;
