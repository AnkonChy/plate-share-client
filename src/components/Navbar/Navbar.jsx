import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import "./Navbar.css";
const Navbar = () => {
  const { user, handleLogout } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-100 mt-4 mb-4 w-11/12 mx-auto">
      <div className="navbar-start">
        <div>
          <Link className="animate__animated animate__rubberBand Left text-2xl md:text-3xl font-bold">
            PlateShare
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg md:text-xl font-semibold gap-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/availableFoods">Available Foods</NavLink>
          <NavLink to="/addFood">Add Food</NavLink>
          <NavLink to="/manageMyFood">Manage My Foods</NavLink>
          <NavLink to="/foodRequest">My Food Request</NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        {/* <input
          type="checkbox"
          className="toggle theme-controller hidden md:block"
          onChange={handleThemeChange}
          checked={theme === "dark"}
        /> */}
        {user ? (
          <img
            referrerPolicy="no-referrer"
            title={user.displayName}
            className=" w-12 h-12 rounded-full mr-4 object-cover"
            src={user.photoURL}
          ></img>
        ) : (
          ""
        )}
        {user ? (
          <button
            className="py-2 px-4 bg-blue-900 text-white rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <>
            <NavLink to="/login">
              <button className="py-1 px-2 md:py-2 md:px-4 bg-blue-900 text-white rounded">
                Login
              </button>
            </NavLink>
            <NavLink to="/register">
              <button className="py-1 px-2 md:py-2 md:px-4 bg-red-900 text-white rounded">
                Register
              </button>
            </NavLink>
          </>
        )}

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="z-10 menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 p-2 shadow right-0 gap-3"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/availableFoods">Available Foods</NavLink>
            <NavLink to="/addFood">Add Food</NavLink>
            <NavLink to="/manageMyFood">Manage My Foods</NavLink>
            <NavLink to="/foodRequest">My Food Request</NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
