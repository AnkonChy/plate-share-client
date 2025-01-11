import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Food from "../../components/Food/Food";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const AvailableFoods = () => {
  const [availableFoods, setAvailableFoods] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [isTwoColumn, setIsTwoColumn] = useState(false);

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_API_URL
        }/all-available-foods?searchParams=${search}&sort=${sort}`
      )
      .then((res) => setAvailableFoods(res.data));
  }, [search, sort]);

  const handleReset = () => {
    setSearch("");
    setSort("");
  };
  return (
    <>
    <Helmet>
      <title>PlateShare | Available Foods</title>
    </Helmet>
    <div className="w-10/12 mx-auto mt-8">
      <h1 className="text-5xl font-bold text-center my-8">
        All Avaiable Foods
      </h1>
      <div>
        <div>
          <label className="input input-bordered flex items-center gap-2 w-1/3 mx-auto my-6">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              name="search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="my-8">
          <div className="flex items-center justify-end gap-4">
            <select
              name="sort"
              id="sort"
              className="border p-4 rounded-md"
              onChange={(e) => setSort(e.target.value)}
              value={sort}
            >
              <option value="">Sort By Expire Date</option>
              <option value="dsc">Descending Order</option>
              <option value="asc">Ascending Order</option>
            </select>
            <button onClick={handleReset} className="btn">
              Reset
            </button>
            <button
              onClick={() => setIsTwoColumn(!isTwoColumn)}
              className="btn"
            >
              Change Layout
            </button>
          </div>
        </div>
      </div>

      <div
        className={`grid  ${
          isTwoColumn ? "md:grid-cols-2" : "md:grid-cols-3"
        } gap-10`}
      >
        {availableFoods.map((food) => (
          <Food key={food._id} food={food}></Food>
        ))}
      </div>
    </div>
    </>
  );
};

export default AvailableFoods;
