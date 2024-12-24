import axios from "axios";
import { format } from "date-fns";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateFood = () => {
  const { id } = useParams();
  const singleFoodData = useLoaderData();
  const { _id, name, pickLocation, expDate, quantity } = singleFoodData;

  const [startDate, setStartDate] = useState(new Date());

  const handleUpdateFood = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = parseFloat(form.quantity.value);
    const pickLocation = form.pickLocation.value;
    const expDate = startDate;

    const updatedFood = {
      name,
      quantity,
      pickLocation,
      expDate,
    };

    console.log(updatedFood);

    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/food/${_id}`,
        updatedFood
      );
      // form.reset();
      toast.success("Data Updated Successfully !!!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div className="bg-[#F4F3F0] p-4 lg:p-24">
        <h2 className="text-3xl text-center font-bold">Add Food</h2>
        <form onSubmit={handleUpdateFood}>
          <div className="md:flex gap-6 my-3">
            <div className="form-control md:w-1/2 mt-6 md:mt-0">
              <label className="label font-bold">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Food Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2 mt-6 md:mt-0">
              <label className="label font-bold">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                name="quantity"
                defaultValue={quantity}
                placeholder="Quantity"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="md:flex items-center gap-6 my-2">
            <div className="form-control md:w-1/2 mt-6 md:mt-0">
              <div className="form-control md:w-1/2 mt-6 md:mt-0">
                <label className="label font-bold">
                  <span className="label-text">Expired Date</span>
                </label>
                <DatePicker
                  className="border p-3 rounded-xl"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
            <div className="form-control md:w-1/2 mt-6 md:mt-0">
              <label className="label font-bold">
                <span className="label-text">Pickup Location</span>
              </label>
              <input
                type="text"
                defaultValue={pickLocation}
                name="pickLocation"
                placeholder="Pickup Location"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* End of Labels */}
          <input
            type="submit"
            value="Update"
            className="btn w-full bg-green-800 text-white mt-6"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateFood;
