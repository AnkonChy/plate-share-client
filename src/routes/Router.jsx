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
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import UpdateFood from "../pages/UpdateFood/UpdateFood";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AboutUs from "../pages/AboutUs/AboutUs";
import Support from "../pages/Support/Support";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/food/:id",
        element: (
          <PrivateRoute>
            <FoodDetails></FoodDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`),
      },
      {
        path: "/manageMyFood",
        element: (
          <PrivateRoute>
            <ManageMyFood></ManageMyFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/foodRequest",
        element: (
          <PrivateRoute>
            <FoodRequest></FoodRequest>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateFood></UpdateFood>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`),
      },
      {
        path:"/aboutUs",
        element: <AboutUs></AboutUs>
      },
      {
        path:"/support",
        element: <Support/>
      }
    ],
  },
]);

export default router;
