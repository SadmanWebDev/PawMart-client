import React from "react";
import { Link } from "react-router";
import { PiArrowBendDownRightBold } from "react-icons/pi";

const Category = () => {
  const categories = [
    {
      category: "Pets",
      route: "/category-filtered-product/Pets",
      image:
        "https://wdtsweetheart.wpengine.com/wp-content/uploads/2025/06/cate-cats-img.jpg",
    },
    {
      category: "Food",
      route: "/category-filtered-product/Food",
      image:
        "https://wdtsweetheart.wpengine.com/wp-content/uploads/2025/06/cate-accessories-img.jpg",
    },
    {
      category: "Accessories",
      route: "/category-filtered-product/Accessories",
      image:
        "https://wdtsweetheart.wpengine.com/wp-content/uploads/2025/06/cate-toys-img.jpg",
    },
    {
      category: "Care Products",
      route: "/category-filtered-product/Care-Products",
      image:
        "https://wdtsweetheart.wpengine.com/wp-content/uploads/2025/06/cate-furniture-img.jpg",
    },
  ];

  return (
    <div className=" mt-15 md:mt-20  mb-10 md:mb-15">
      <div className="text-center  mb-7 md:mb-10">
        <p className="text-orange-600 mb-5 text-lg md:text-xl">
          Joy with Every Paw
        </p>
        <h1 className="text-gray-600 text-3xl md:text-5xl font-bold">
          Explore PawMart Collections
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div className="card shadow-xl relative">
            <img src={category.image} alt="" className=" rounded-2xl" />
            <div className="absolute bg-white rounded-br-lg">
              <h3 className="text-2xl text-gray-600 font-bold pr-2">
                {category.category}
              </h3>
            </div>
            <Link to={category.route} className="absolute bottom-4 right-4">
              <button className="btn btn-circle btn-lg bg-orange-700 hover:bg-orange-600 border-none text-white">
                <PiArrowBendDownRightBold />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
