import React from "react";
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
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-md rounded-2xl hover:shadow-lg transition"
            >
              <img src={card.icon} alt={card.title} className="rounded-2xl" />
              <div className="mt-5 mb-8 px-6">
                <h3 className="font-semibold text-2xl text-gray-700 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyAdopt;
