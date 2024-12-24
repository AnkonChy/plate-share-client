import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../components/Provider/AuthProvider";
import DatePicker from "react-datepicker";
import { format } from "date-fns";

const FoodDetails = () => {
  const { user } = useContext(AuthContext);
  const foodData = useLoaderData();
  console.log(foodData);
  const [startDate, setStartDate] = useState(new Date());

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
  } = foodData;
  return (
    <div className="w-10/12 mx-auto my-10">
      <div className="lg:flex lg:flex-row items-center">
        <div className="w-full lg:w-1/2">
          <img
            className="rounded-2xl h-[400px] object-cover"
            src={image}
            alt=""
          />
        </div>
        <div className=" p-10 space-y-4 w-full lg:w-1/2">
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="font-medium">
            <span className="text-lg">Quantity: </span>
            {quantity}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <p>
                <span className="font-medium text-lg">Pick Location: </span>
                {pickLocation}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="font-medium text-lg">Expire Date: </h3>
              <p>{format(new Date(expDate), "P")}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <h3 className="font-medium text-lg">Notes:</h3>
              <p>{notes}</p>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="font-medium text-lg">Donator Name: </h3>

              {donatorName}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-lg">Donator Email : </h3>
            {donatorEmail}
          </div>
          <div>
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="btn btn-success block mx-auto text-white"
            >
              Request
            </button>

            {/* Modal  */}
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <form>
                  <div className="md:flex gap-6 my-3">
                    <div className="form-control md:w-1/2 mt-6 md:mt-0">
                      <label className="label font-bold">
                        <span className="label-text">Food Name</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        readOnly
                        defaultValue={name}
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control md:w-1/2">
                      <label className="label">
                        <span className="label-text font-bold">Food Image</span>
                      </label>
                      <input
                        type="url"
                        name="image"
                        readOnly
                        defaultValue={image}
                        placeholder="Food Image"
                        className="input input-bordered"
                        required
                      />
                    </div>
                  </div>
                  <div className="md:flex gap-6 my-3">
                    <div className="form-control md:w-1/2 mt-6 md:mt-0">
                      <label className="label font-bold">
                        <span className="label-text">Food Id</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        readOnly
                        defaultValue={_id}
                        placeholder="Food Id"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control md:w-1/2">
                      <label className="label">
                        <span className="label-text font-bold">
                          Pickup Location
                        </span>
                      </label>
                      <input
                        type="url"
                        defaultValue={pickLocation}
                        readOnly
                        placeholder="Pickup Location"
                        className="input input-bordered"
                        required
                      />
                    </div>
                  </div>
                  <div className="md:flex gap-6 my-3">
                    <div className="form-control md:w-1/2 mt-6 md:mt-0">
                      <label className="label font-bold">
                        <span className="label-text">Donator Email</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Donator Email"
                        readOnly
                        defaultValue={donatorEmail}
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control md:w-1/2">
                      <label className="label">
                        <span className="label-text font-bold">
                          Donator Name
                        </span>
                      </label>
                      <input
                        type="url"
                        defaultValue={donatorName}
                        readOnly
                        placeholder=" Donator Name"
                        className="input input-bordered"
                        required
                      />
                    </div>
                  </div>
                  <div className="md:flex gap-6 my-3">
                    <div className="form-control md:w-1/2 mt-6 md:mt-0">
                      <label className="label font-bold">
                        <span className="label-text">User Email</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        defaultValue={user.email}
                        readOnly
                        placeholder="User Email"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control md:w-1/2">
                      <label className="label">
                        <span className="label-text font-bold">
                          Request Date
                        </span>
                      </label>
                      <DatePicker
                        readOnly
                        className="border p-3 rounded-xl"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                    </div>
                  </div>
                  <div className="md:flex gap-6 my-3">
                    <div className="form-control md:w-1/2 mt-6 md:mt-0">
                      <label className="label font-bold">
                        <span className="label-text">Expire Date</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        readOnly
                        placeholder="Expire Date"
                        defaultValue={expDate}
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control md:w-1/2">
                      <label className="label">
                        <span className="label-text font-bold">
                          Additional Notes
                        </span>
                      </label>
                      <textarea
                        defaultValue={notes}
                        name="notes"
                        id="notes"
                        rows="4"
                        className="rounded-md p-3 border"
                        placeholder="Write additional notes"
                      ></textarea>
                    </div>
                  </div>
                  <div className="md:flex gap-6 my-3">
                    <button className="btn btn-success block mx-auto text-white">
                      Request
                    </button>
                  </div>
                </form>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;