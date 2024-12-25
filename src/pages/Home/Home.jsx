import React from "react";
import Slider from "../../components/Slider/Slider";
import FeaturedFoods from "../../components/FeaturedFoods/FeaturedFoods";
import TopDonator from "../../components/TopDonator/TopDonator";
import Donation from "../../components/Donation/Donation";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <FeaturedFoods></FeaturedFoods>
      <TopDonator></TopDonator>
      <Donation></Donation>
    </div>
  );
};

export default Home;
