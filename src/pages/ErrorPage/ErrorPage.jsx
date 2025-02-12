import React from "react";
import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-2xl rounded-xl p-10 max-w-lg text-center border border-gray-200">
        <h1 className="text-5xl font-extrabold text-red-500 mb-4">Oops!</h1>
        <p className="text-lg text-gray-600 mb-3">
          We encountered an unexpected error.
        </p>
        <p className="text-gray-500 italic text-sm">
          {error?.statusText || error?.message}
        </p>
        <Link to="/">
          <button className="mt-6 px-6 py-3 bg-green-500 text-white text-lg font-medium rounded-lg shadow-md transition duration-300 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
