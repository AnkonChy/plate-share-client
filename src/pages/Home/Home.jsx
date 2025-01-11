import React from "react";
import Slider from "../../components/Slider/Slider";
import FeaturedFoods from "../../components/FeaturedFoods/FeaturedFoods";
import TopDonator from "../../components/TopDonator/TopDonator";
import Donation from "../../components/Donation/Donation";
import YoutubeVdo from "../../components/vdo/YoutubeVdo";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
      <title>PlateShare</title>
      </Helmet>
      <Slider></Slider>
      <FeaturedFoods></FeaturedFoods>
      <TopDonator></TopDonator>
      <Donation></Donation>
      <YoutubeVdo></YoutubeVdo>
    </div>
  );
};

export default Home;
