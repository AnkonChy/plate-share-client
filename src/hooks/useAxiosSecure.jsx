import axios from "axios";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../components/Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("error caught in interceptor", error);

        if (error.status === 401 || error.status === 403) {
          console.log("need to logout the user");
          handleLogout()
            .then(() => {
              console.log("logged out user");
              navigate("/login");
            })
            .catch((error) => console.log(error));
        }
        return Promise.reject(error);
      }
    );
  }, []);
  return axiosInstance;
};

export default useAxiosSecure;
