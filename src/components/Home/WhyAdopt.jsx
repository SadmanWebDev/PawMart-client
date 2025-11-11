import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "framer-motion";

const WhyAdopt = () => {
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://i.ibb.co/ZNcMg4s/adopt-pet.jpg"
                alt="Adopt Pet"
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-pawmart-orange font-semibold uppercase tracking-wider">
                Make a Difference
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-pawmart-dark font-heading">
                Why Adopt from PawMart?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Every year, millions of pets need loving homes. By choosing to
                adopt instead of shop, you're giving a second chance to animals
                in need. Adoption saves lives and makes room for shelters to
                rescue more pets.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FaHeart className="text-pawmart-orange text-2xl flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Save a life and gain a loyal companion
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaHeart className="text-pawmart-orange text-2xl flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Support local shelters and rescue organizations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaHeart className="text-pawmart-orange text-2xl flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Find pets of all ages, breeds, and sizes
                  </span>
                </li>
              </ul>
              <Link
                to="/category-filtered-product/Pets"
                className="btn bg-pawmart-orange hover:bg-orange-600 text-white border-none"
              >
                Browse Pets
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyAdopt;
