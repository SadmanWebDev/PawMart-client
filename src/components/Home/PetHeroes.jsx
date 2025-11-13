import React from "react";
import { Link } from "react-router";

const PetHeroes = () => {
  const heroes = [
    {
      id: 1,
      name: "Mariam Adel",
      img: "https://wdtsweetheart.wpengine.com/wp-content/uploads/2025/06/popup-testimonial-img-01.jpg",
      role: "Adopted Bella",
      quote:
        "Bella brought sunshine back into our home. PawMart made the process so easy!",
    },
    {
      id: 2,
      name: "Sara Nader",
      img: "https://wdtsweetheart.wpengine.com/wp-content/uploads/2025/06/popup-testimonial-img-05.jpg",
      role: "Adopted Coco",
      quote:
        "Coco has become my best friend — can’t imagine life without her now.",
    },
    {
      id: 3,
      name: "Nadia Youssef",
      img: "https://wdtsweetheart.wpengine.com/wp-content/uploads/2025/06/popup-testimonial-img-03.jpg",
      role: "Volunteer Caregiver",
      quote:
        "Caring for rescues is pure joy — each one has a story of resilience.",
    },
    {
      id: 4,
      name: "Lina Sameh",
      img: "https://wdtsweetheart.wpengine.com/wp-content/uploads/2025/06/popup-testimonial-img-02.jpg",
      role: "Adopted Simba",
      quote: "Simba filled my life with laughter and love. Thank you, PawMart!",
    },
  ];

  return (
    <section className="bg-orange-50 rounded-2xl mt-5 py-20">
      <div className="max-w-11/12 mx-auto">
        <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-700">
          Meet Our Pet Heroes
        </h2>
        <p className="text-gray-500 text-lg mt-5">
          Inspiring stories from families who chose love through adoption 💛
        </p>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-8 ">
        {heroes.map((hero) => (
          <div
            key={hero.id}
            className="relative rounded-2xl shadow-lg overflow-hidden group"
            style={{
              backgroundImage: `url(${hero.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-300"></div>
            <div className="relative text-center text-white p-6 flex flex-col justify-end h-80">
              <h3 className="font-semibold text-lg">{hero.name}</h3>
              <p className="text-sm text-orange-200 mb-2">{hero.role}</p>
              <p className="text-sm text-gray-200 italic">“{hero.quote}”</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default PetHeroes;
