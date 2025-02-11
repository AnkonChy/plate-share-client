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
    <div
      className="mt-20 w-10/12 mx-auto"
      data-aos="flip-left"
      data-aos-duration="2000"
    >
      <h1 className=" animate__animated animate__fadeInLeft text-3xl md:text-4xl lg:text-5xl font-bold">
        Heroes of Sharing
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 my-12">
        {topDonator.map((donator) => (
          <div
            key={donator._id}
            className="card card-compact bg-base-100 shadow-xl hover:bg-gray-200 hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <figure>
              <img
                referrerPolicy="no-referrer"
                className="w-28 h-28 rounded-full object-cover mt-4"
                src={donator.donatorImg}
              />
            </figure>
            <div className="flex flex-col justify-center items-center space-y-4 mt-4 p-4 flex-grow">
              <h2 className="text-2xl font-bold"></h2>
              <h1 className="text-lg font-bold">{donator.donatorName}</h1>

              <div>
                <h1 className="font-medium">Donate Item: {donator.name}</h1>
                <h1 className="font-medium">
                  <span className="font-bold">Donate Quantity:</span>{" "}
                  {donator.quantity}
                </h1>
              </div>

              <div className="card-actions justify-end">
                <a href="https://meet.google.com/aoc-dwre-jtn" target="_blank">
                  <button className="bg-[#008080] text-white px-4 py-2 rounded-md hover:bg-teal-900">
                    Contact
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDonator;
