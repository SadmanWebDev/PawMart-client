import { useState, useEffect, use } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { AuthContext } from "../Auth/AuthContext";
import Loader from "../../components/Loader/Loader";

const MyOrders = () => {
  const { user } = use(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "My Orders - PawMart";
    fetchMyOrders();
  }, [user]);

  const fetchMyOrders = async () => {
    try {
      const response = await axios.get(
        `https://pawmart-server-tawny.vercel.app/api/orders/${user.email}`
      );
      setOrders(response.data);
      setLoading(false);
    } catch (error) {
      toast.error("Error fetching orders");
      setLoading(false);
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(18);
    doc.setTextColor(245, 158, 66); // pawmart-orange
    doc.text("PawMart - My Orders Report", 14, 20);

    // Add user info
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text(`Customer: ${user.displayName || "N/A"}`, 14, 30);
    doc.text(`Email: ${user.email}`, 14, 36);
    doc.text(`Report Date: ${new Date().toLocaleDateString()}`, 14, 42);

    // Prepare table data
    const tableData = orders.map((order) => [
      order.productName,
      order.quantity,
      order.price === 0 ? "Free" : `৳${order.price}`,
      order.address,
      order.phone,
      order.date,
    ]);

    // Add table
    doc.autoTable({
      startY: 50,
      head: [["Product", "Qty", "Price", "Address", "Phone", "Date"]],
      body: tableData,
      theme: "grid",
      headStyles: {
        fillColor: [245, 158, 66], // pawmart-orange
        textColor: [255, 255, 255],
        fontStyle: "bold",
      },
      styles: {
        fontSize: 9,
        cellPadding: 5,
      },
      alternateRowStyles: {
        fillColor: [255, 245, 235], // pawmart-light
      },
    });

    // Calculate total
    const total = orders.reduce(
      (sum, order) => sum + order.price * order.quantity,
      0
    );
    const finalY = doc.lastAutoTable.finalY + 10;
    doc.setFontSize(12);
    doc.setFont(undefined, "bold");
    doc.text(`Total Amount: ৳${total}`, 14, finalY);

    // Save PDF
    doc.save(`PawMart_Orders_${new Date().getTime()}.pdf`);
    toast.success("Report downloaded successfully!");
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-pawmart-light py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-pawmart-dark font-heading">
              My Orders
            </h1>
            {orders.length > 0 && (
              <button
                onClick={downloadPDF}
                className="btn bg-pawmart-orange hover:bg-orange-600 text-white border-none"
              >
                <FaDownload className="mr-2" />
                Download Report
              </button>
            )}
          </div>

          {orders.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                You haven't placed any orders yet
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-xl overflow-x-auto">
              <table className="table">
                <thead className="bg-pawmart-orange text-white">
                  <tr>
                    <th>Product Name</th>
                    <th>Buyer Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Date</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order._id} className="hover">
                      <td className="font-semibold">{order.productName}</td>
                      <td>{order.buyerName}</td>
                      <td className="text-center">{order.quantity}</td>
                      <td className="font-bold text-pawmart-orange">
                        {order.price === 0 ? "Free" : `৳${order.price}`}
                      </td>
                      <td>{order.address}</td>
                      <td>{order.phone}</td>
                      <td>{order.date}</td>
                      <td className="max-w-xs truncate">
                        {order.additionalNotes || "N/A"}
                      </td>
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
