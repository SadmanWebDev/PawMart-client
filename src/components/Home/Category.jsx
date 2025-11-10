import React from "react";
import { motion } from "framer-motion";
import { FaDrumstickBite, FaPaw, FaShoppingBag } from "react-icons/fa";
import { MdPets } from "react-icons/md";
import { Link } from "react-router";

const Category = () => {
  const categories = [
    {
      name: "Pets",
      icon: <MdPets />,
      route: "/category-filtered-product/Pets",
      color: "bg-orange-100",
    },
    {
      name: "Food",
      icon: <FaDrumstickBite />,
      route: "/category-filtered-product/Food",
      color: "bg-blue-100",
    },
    {
      name: "Accessories",
      icon: <FaPaw />,
      route: "/category-filtered-product/Accessories",
      color: "bg-pink-100",
    },
    {
      name: "Care Products",
      icon: <FaShoppingBag />,
      route: "/category-filtered-product/Care-Products",
      color: "bg-purple-100",
    },
  ];

  return (
    <div>
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-pawmart-orange font-semibold uppercase tracking-wider mb-2">
              Joy With Every Paw
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-pawmart-dark font-heading">
              Explore Pet Collections
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={category.route}>
                  <div
                    className={`${category.color} p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer`}
                  >
                    <div className="text-5xl mb-4 text-pawmart-orange group-hover:scale-110 transition-transform">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-pawmart-dark font-heading">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              </motion>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
