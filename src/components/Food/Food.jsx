import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const Food = ({ food }) => {
  const {
    _id,
    name,
    image,
    quantity,
    pickLocation,
    expDate,
    notes,
    donatorName,
    donatorImg,
    donatorEmail,
  } = food;
  return (
    <div className="card card-compact bg-base-100 shadow-xl rounded-none">
      <figure>
        <img className="w-full  h-64 object-cover" src={image} alt="Movies" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
        <div className="flex justify-between items-center">
          <p>
            <span className="font-bold">Quantity : </span>
            {quantity}
          </p>
          <p className="font-semibold text-right">
            <span className="font-bold">Expire Date :</span>
            {format(new Date(expDate), "P")}
          </p>
        </div>
        <div className="flex justify-between items-center flex-grow">
          <p className="font-semibold">
            <span className="font-bold">Pick Location:</span> {pickLocation}
          </p>
        </div>
        <div className="card-actions justify-center mt-4">
          <Link to={`/food/${_id}`}>
            <button className="text-lg py-2 px-6 rounded-full bg-gray-800 text-white border hover:bg-blue-900">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Food;
