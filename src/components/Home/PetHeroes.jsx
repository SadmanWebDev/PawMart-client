import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const PetHeroes = () => {
  const heroes = [
    {
      id: 1,
      name: "Max the Golden",
      img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop",
      emoji: "🦸",
      story:
        "Rescued from streets, now a therapy dog helping children with autism",
      adopted: "Jan 2024",
    },
    {
      id: 2,
      name: "Luna the Persian",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTffbWl8DcNGP1pwyEmngLxpyNAH-IdwBkEeg&s",
      emoji: "🌟",
      story: "Found abandoned, now brings joy to a senior citizen's home",
      adopted: "Mar 2024",
    },
    {
      id: 3,
      name: "Buddy the Beagle",
      img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=300&fit=crop",
      emoji: "🏆",
      story:
        "Once timid and scared, now a confident companion and agility champion",
      adopted: "May 2024",
    },
    {
      id: 4,
      name: "Charlie the Husky",
      img: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=400&h=300&fit=crop",
      emoji: "💪",
      story: "Recovered from injury, now runs marathons with his loving owner",
      adopted: "Jul 2024",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-pawmart-orange font-semibold uppercase tracking-wider mb-2">
            Success Stories
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-pawmart-dark font-heading">
            Meet Our Pet Heroes
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            These amazing pets found their forever homes through PawMart. Their
            stories inspire us to continue our mission of connecting pets with
            loving families.
          </p>
        </div>

        {/* Dynamic Hero Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {heroes.map((hero, index) => (
            <motion.div
              key={hero.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={hero.img}
                  alt={hero.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center space-y-3">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto -mt-12 mb-4 shadow-lg">
                  <span className="text-3xl">{hero.emoji}</span>
                </div>
                <h3 className="text-xl font-bold text-pawmart-dark">
                  {hero.name}
                </h3>
                <p className="text-sm text-gray-600">{hero.story}</p>
                <div className="flex items-center justify-center gap-2 text-sm text-orange-500 font-semibold">
                  <span>❤️</span>
                  <span>Adopted: {hero.adopted}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link
            to="/category-filtered-product/Pets"
            className="btn bg-pawmart-orange hover:bg-orange-600 text-white border-none text-lg px-8"
          >
            Be Their Hero - Adopt Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PetHeroes;
