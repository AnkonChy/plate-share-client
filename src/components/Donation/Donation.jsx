import axios from "axios";
import React, { useEffect, useState } from "react";

const Donation = () => {
  const [donation, setDonation] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/donation`)
      .then((res) => setDonation(res.data));
  }, []);
  return (
    <div className="w-10/12 mx-auto">
      <h1 className=" animate__animated animate__fadeInLeft text-3xl md:text-4xl lg:text-5xl font-bold text-center">
        You can save them
      </h1>
      <div className="grid md:grid-cols-3 gap-6 my-10">
        {donation.map((singleDonation) => (
          <div
            key={singleDonation._id}
            className="card card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <img
                className="object-cover"
                src={singleDonation.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{singleDonation.title}</h2>
              <p>{singleDonation.description}</p>
              <div className="flex justify-between my-4 items-center">
                <p className="font-bold">
                  Raised: $<span className="font-medium">{singleDonation.raised}</span>
                </p>
                <p className="font-bold">
                  Goal: $<span className="font-medium">{singleDonation.goal}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Donation;
