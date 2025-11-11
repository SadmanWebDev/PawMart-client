import React from "react";
import Carousel from "../../components/Home/Carousel";
import Category from "../../components/Home/Category";
import RecentListings from "../../components/Home/RecentListings";
import WhyAdopt from "../../components/Home/WhyAdopt";
import PetHeroes from "../../components/Home/PetHeroes";

const Home = () => {
  return (
    <div>
      <div className="">
        <Carousel />
      </div>
      <div className="">
        <Category />
      </div>
      <div className="">
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
