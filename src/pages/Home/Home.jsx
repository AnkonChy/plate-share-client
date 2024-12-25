import React from "react";
import Slider from "../../components/Slider/Slider";
import FeaturedFoods from "../../components/FeaturedFoods/FeaturedFoods";
import TopDonator from "../../components/TopDonator/TopDonator";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <FeaturedFoods></FeaturedFoods>
      <TopDonator></TopDonator>
    </div>
  );
};

export default Home;
