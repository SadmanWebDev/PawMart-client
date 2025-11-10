import React from "react";
import Carousel from "../../components/Home/Carousel";
import Category from "../../components/Home/Category";

const Home = () => {
  return (
    <div>
      <div className="">
        <Carousel />
      </div>
      <div className="">
        <Category />
      </div>
    </div>
  );
};

export default Home;
