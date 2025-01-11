import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>PlateShare | About Us</title>
      </Helmet>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/M2Sz8RG/pexels-julia-m-cameron-6994982.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              {/* Welcome to <span className="font-bold">Cine Vault</span>, your go-to
            platform for exploring movies across all genres. From classics to
            blockbusters, we bring you reviews, recommendations, and everything
            a movie lover needs. Dive into the world of cinema with us! */}
              Welcome to <span className="font-bold">Plate Share</span>, a
              compassionate platform dedicated to connecting kind-hearted
              individuals with those in need. Our mission is to bridge the gap
              between surplus food and hunger by enabling everyone to share
              their food with the hungry. At PlateShare, we believe that no meal
              should go to waste and no person should go to bed hungry. Join us
              in making a difference, one plate at a time.
            </p>
            <Link to="/">
              <button className="btn bg-[#01aa90] hover:bg-teal-900 text-white">
                Get Started with PlateShare
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
