import React from "react";
import Carousel from "../../components/Home/Carousel";
import Category from "../../components/Home/Category";
import RecentListings from "../../components/Home/RecentListings";
import WhyAdopt from "../../components/Home/WhyAdopt";
import PetHeroes from "../../components/Home/PetHeroes";

const Home = () => {
  return (
    <div className="max-w-[1500px] mx-auto">
      <div className="">
        <Carousel />
      </div>
      <div className="max-w-11/12 md:max-w-7xl mx-auto">
        <Category />
      </div>
      <div className="rounded-2xl mt-5 py-20 bg-blue-50">
        <RecentListings />
      </div>
      <div className="">
        <WhyAdopt />
      </div>
      <div className="">
        <PetHeroes />
      </div>
    </div>
  );
};

export default Home;
