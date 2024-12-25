import axios from "axios";
import React, { useEffect, useState } from "react";

const TopDonator = () => {
  const [topDonator, setTopDonator] = useState([]);
  useEffect(() => {
    const fetchTopDonator = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/top-donator`
      );
      setTopDonator(res.data);
    };
    fetchTopDonator();
  }, []);


  return (
    <div className="my-32 w-10/12 mx-auto" data-aos="flip-left" data-aos-duration="2000">
      <h1 className=" animate__animated animate__fadeInLeft text-3xl md:text-4xl lg:text-5xl font-bold">
        Top Donator
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
        {topDonator.map((donator) => (
          <div
            key={donator._id}
            className="card card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <img
                referrerPolicy="no-referrer"
                className="w-28 h-28 rounded-full object-cover"
                src={donator.donatorImg}
              />
            </figure>
            <div className="flex flex-col justify-center items-center space-y-4 mt-4 p-4">
              <h2 className="text-2xl font-bold"></h2>
              <h1 className="text-lg font-bold">{donator.donatorName}</h1>

              <div>
                <h1 className="font-medium">Donate Item: {donator.name}</h1>
                <h1 className="font-medium">
                  Donate Quantity: {donator.quantity}
                </h1>
              </div>

              <div className="card-actions justify-end">
                <button className="btn btn-success">Contact</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDonator;
