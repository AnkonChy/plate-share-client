import React, { useContext, useState } from "react";
import { AuthContext } from "../../components/Provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const AddFood = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const quantity = parseFloat(form.quantity.value);
    const pickLocation = form.pickLocation.value;
    const expDate = startDate;
    const notes = form.notes.value;

    const foodInfo = {
      name,
      image,
      quantity,
      pickLocation,
      expDate,
      notes,
      donatorName: user?.displayName,
      donatorImg: user?.photoURL,
      donatorEmail: user?.email,
      status: "available",
    };

    console.log(foodInfo);

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/add-food`, foodInfo);
      form.reset();
      toast.success("Data Added Successfully !!!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <Helmet>
        <title>PlateShare | Add Food</title>
      </Helmet>
      <div className="bg-[#F4F3F0] p-4 lg:p-24">
        <h2 className="text-3xl text-center font-bold">Add Food</h2>
        <form onSubmit={handleSubmit}>
          <div className="md:flex gap-6 my-3">
            <div className="form-control md:w-1/2 mt-6 md:mt-0">
              <label className="label font-bold">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Food Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Image</span>
              </label>
              <input
                type="url"
                name="image"
                placeholder="Food Image"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="md:flex items-center gap-6 my-2">
            <div className="form-control md:w-1/2 mt-6 md:mt-0">
              <label className="label font-bold">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2 mt-6 md:mt-0">
              <label className="label font-bold">
                <span className="label-text">Pickup Location</span>
              </label>
              <input
                type="text"
                name="pickLocation"
                placeholder="Pickup Location"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="md:flex gap-6 ">
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
            <div className="form-control w-full md:w-1/2 mt-6 md:mt-0">
              <label className="label font-bold">
                <span className="label-text">Additional Notes</span>
              </label>
              <textarea
                required
                name="notes"
                id="notes"
                rows="4"
                className="rounded-md p-3"
                placeholder="Write additional notes"
              ></textarea>
            </div>
          </div>
          <div className="md:flex gap-6 ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Donator Image</span>
              </label>
              <input
                defaultValue={user.photoURL}
                readOnly
                type="text"
                name="donatorImage"
                placeholder="Food Image"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2 mt-6 md:mt-0">
              <label className="label font-bold">
                <span className="label-text">Donator Name</span>
              </label>
              <input
                defaultValue={user.displayName}
                readOnly
                type="text"
                name="donator image"
                placeholder="Donator Image"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2 mt-6 md:mt-0">
              <label className="label font-bold">
                <span className="label-text">Donator Email</span>
              </label>
              <input
                defaultValue={user.email}
                readOnly
                type="email"
                name="donator email"
                placeholder="Donator Email"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* End of Labels */}
          <input
            type="submit"
            value="Add Schedule"
            className="btn w-full bg-green-800 text-white mt-6"
          />
        </form>
      </div>
    </div>
  );
};

export default AddFood;
