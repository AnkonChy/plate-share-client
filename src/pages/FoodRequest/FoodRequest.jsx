import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/Provider/AuthProvider";
import FoodRequestTable from "../../components/FoodRequestTable/FoodRequestTable";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const FoodRequest = () => {
  const { user } = useContext(AuthContext);
  const { email } = user;

  const [foodRequest, setFoodRequest] = useState([]);

  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure
      .get(`${import.meta.env.VITE_API_URL}/foodRequest?email=${email}`)
      .then((res) => setFoodRequest(res.data));
  }, [email]);

  return (
    <div className="w-1/2 mx-auto bg-slate-50 mt-14">
      <h1 className="text-5xl font-bold text-center my-8">Food Request</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>serial</th>
              <th>Donar Name</th>
              <th>Pickup Location</th>
              <th>Expire Date</th>
              <th>Request Date</th>
            </tr>
          </thead>
          <tbody>
            {foodRequest.length === 0 ? (
              <p>No data found</p>
            ) : (
              foodRequest.map((food, index) => (
                <FoodRequestTable
                  idx={index}
                  key={food?._id}
                  food={food}
                  foodRequest={foodRequest}
                  setFoodRequest={setFoodRequest}
                ></FoodRequestTable>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodRequest;
