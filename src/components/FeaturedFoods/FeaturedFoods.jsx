import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { Link, NavLink } from "react-router-dom";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
const FeaturedFoods = () => {
  const [featuredFoods, setFeaturedFoods] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/featured-foods`)
      .then((res) => res.json())
      .then((data) => setFeaturedFoods(data));
  }, []);


  return (
    <div className="mt-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
        Featured Foods
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:w-11/12 lg:w-10/12 mx-auto my-12">
        {featuredFoods.map((food) => (
          <div
            key={food._id}
            className="card card-compact bg-base-100 shadow-xl rounded-xl group"
          >
            <figure>
              <img
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
                src={food.image}
                alt="Movies"
              />
            </figure>
            <div className="card-body space-y-1">
              <h2 className="card-title text-2xl">{food.name}</h2>
              <p className="text-sm text-justify">
                {food.notes.slice(0, 98)}...
              </p>
              <div className="flex justify-between items-center">
                <p>
                  <span className="font-bold">Quantity : </span>
                  {food.quantity}
                </p>
                <p className="font-semibold flex items-center justify-end gap-1">
                  <MdDateRange className="text-lg" />
                  {format(new Date(food.expDate), "P")}
                </p>
              </div>
              <div className="flex justify-between items-center flex-grow">
                <p className="font-semibold flex items-center gap-1">
                  <FaMapLocationDot className="text-lg" />
                  {food.pickLocation}
                </p>
              </div>
              <div className="card-actions justify-center mt-4">
                <Link to={`/food/${food._id}`}>
                  <button className="text-base py-2 px-3 rounded-lg bg-[#01AA90] text-white border hover:bg-teal-800 font-medium">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <NavLink to="/availableFoods">
        <button className="text-lg py-2 px-6 rounded-full text-[#01AA90] border-2 border-[#01AA90] hover:bg-[#01AA90] hover:text-white  block mx-auto">
          Show All
        </button>
      </NavLink>
    </div>
  );
};

export default FeaturedFoods;
