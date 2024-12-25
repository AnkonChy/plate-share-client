import axios from "axios";
import { format } from "date-fns";
import React from "react";
import { FaFile, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
const FoodRequestTable = ({ idx, food, foodRequest, setFoodRequest }) => {
  const { _id, pickLocation, expDate, requestDate, donatorName } = food;

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/foodRequest/${id}`);
      const newData = foodRequest.filter((f) => id !== f._id);
      setFoodRequest(newData);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <tr>
        <td>{idx + 1}</td>
        <td>{donatorName}</td>
        <td>{pickLocation}</td>
        <td>{format(new Date(requestDate), "P")}</td>
        <td>{format(new Date(expDate), "P")}</td>
        <td>
          <div className="flex gap-4">
            <button
              onClick={() => handleDelete(_id)}
              className="bg-orange-500 px-4 py-2 rounded text-white"
            >
              <FaTrash className=""></FaTrash>
            </button>
            {/* <button className="bg-green-500 px-4 py-2 rounded text-white">
              <Link to={`/update/${_id}`}>
                <FaFile />
              </Link>
            </button> */}
          </div>
        </td>
      </tr>
    </>
  );
};

export default FoodRequestTable;
