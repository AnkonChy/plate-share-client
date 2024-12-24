import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/Provider/AuthProvider";
import ManageFood from "../../components/ManageFood/ManageFood";

const ManageMyFood = () => {
  const { user } = useContext(AuthContext);
  const { email } = user;
  console.log(email);
  const [manageFoods, setManageFoods] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/manageMyFood?email=${email}`)
      .then((res) => res.json())
      .then((data) => setManageFoods(data));
  }, [email]);
  console.log(manageFoods);

  return (
    <div className="w-1/2 mx-auto bg-slate-50 mt-14">
      <h1 className="text-5xl font-bold text-center my-8">
        All Avaiable Foods
      </h1>
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
  );
};

export default ManageMyFood;
