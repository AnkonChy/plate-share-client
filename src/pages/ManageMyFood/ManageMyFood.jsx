import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/Provider/AuthProvider";
import ManageFood from "../../components/ManageFood/ManageFood";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const ManageMyFood = () => {
  const { user } = useContext(AuthContext);
  const { email } = user;

  const [manageFoods, setManageFoods] = useState([]);

  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure
      .get(`${import.meta.env.VITE_API_URL}/manageMyFood?email=${email}`)
      .then((res) => setManageFoods(res.data));
  }, [email]);

  return (
    <>
     <Helmet>
            <title>PlateShare | Manage Food</title>
          </Helmet>
      <div className="w-1/2 mx-auto bg-slate-50 mt-14">
        <h1 className="text-5xl font-bold text-center my-8">Manage My Foods</h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>serial</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Pick Location</th>
                <th>Expire Date</th>
              </tr>
            </thead>
            <tbody>
              {manageFoods.length === 0 ? (
                <p>No data found</p>
              ) : (
                manageFoods.map((food, index) => (
                  <ManageFood
                    idx={index}
                    key={food?._id}
                    food={food}
                    manageFoods={manageFoods}
                    setManageFoods={setManageFoods}
                  ></ManageFood>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageMyFood;
