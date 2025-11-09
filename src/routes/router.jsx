import { createBrowserRouter } from "react-router";
import MainLayout from "../components/Layout/MainLayout";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";
import AllListings from "../pages/Listings/AllListings";
import ListingDetails from "../pages/Listings/ListingDetails";
import MyListings from "../pages/Listings/MyListings";
import MyOrders from "../pages/Orders/MyOrders";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import PetsSupplies from "../pages/PetsSupplies/PetsSupplies";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/pets-supplies",
        Component: PetsSupplies,
      },
      {
        path: "/all-listings",
        element: (
          <ProtectedRoute>
            <AllListings></AllListings>
          </ProtectedRoute>
        ),
      },
      {
        path: "/listing/:id",
        element: (
          <ProtectedRoute>
            <ListingDetails></ListingDetails>
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-listings",
        element: (
          <ProtectedRoute>
            <MyListings></MyListings>
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-order",
        element: (
          <ProtectedRoute>
            <MyOrders></MyOrders>
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);

export default router;
