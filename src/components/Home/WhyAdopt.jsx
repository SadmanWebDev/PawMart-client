import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "framer-motion";

const WhyAdopt = () => {
  const cards = [
    {
      id: 1,
      title: "Save a Life",
      description:
        "Adopting gives homeless pets a new beginning filled with hope and care.",
      icon: "https://i.ibb.co.com/gbFF0dvh/Gemini-Generated-Image-12mwqs12mwqs12mw.png",
    },
    {
      id: 2,
      title: "Find True Companionship",
      description:
        "Rescued pets are grateful, loyal, and ready to become part of your family.",
      icon: "https://i.ibb.co.com/27b6mX2N/Gemini-Generated-Image-onhkreonhkreonhk.png",
    },
    {
      id: 3,
      title: "Health & Care Assured",
      description:
        "All adopted pets are vaccinated, groomed, and health-checked before joining you.",
      iconAlt: "vet care icon",
      icon: "https://i.ibb.co.com/wq05rwG/Gemini-Generated-Image-2qr5a72qr5a72qr5.png",
    },
  ];
  return (
    <div>
      {/* <section className="py-16 bg-white">
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
      </section> */}
      <section className=" py-16 px-6 md:px-12 text-center rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-700">
            Why Adopt from PawMart?
          </h2>
          <p className="text-gray-500 text-lg mt-5 max-w-5xl mx-auto">
            Every adoption saves a life. At PawMart, we connect loving families
            with pets in need of a forever home — because every paw deserves a
            second chance to love, play, and be cherished.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white shadow-md rounded-2xl hover:shadow-lg transition"
            >
              <img src={card.icon} alt={card.title} className="rounded-2xl" />
              <div className="mt-5 mb-8 px-6">
                <h3 className="font-semibold text-2xl text-gray-700 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyAdopt;
