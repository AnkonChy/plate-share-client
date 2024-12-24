import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import AvailableFoods from "../pages/AvailableFoods/AvailableFoods";
import AddFood from "../pages/AddFood/AddFood";
import ManageMyFood from "../pages/ManageMyFood/ManageMyFood";
import FoodRequest from "../pages/FoodRequest/FoodRequest";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/availableFoods",
        element: <AvailableFoods></AvailableFoods>,
        // loader: () =>
        //   fetch(`${import.meta.env.VITE_API_URL}/all-available-foods`),
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/manageMyFood",
        element: <ManageMyFood></ManageMyFood>,
      },
      {
        path: "/foodRequest",
        element: <FoodRequest></FoodRequest>,
      },
    ],
  },
]);

export default router;
