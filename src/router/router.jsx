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
        path: "/all-listings",
        Component: AllListings,
      },
      {
        path: "/listing/:id",
        Component: ListingDetails,
      },
      {
        path: "/my-listings",
        Component: MyListings,
      },
      {
        path: "/my-order",
        Component: MyOrders,
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