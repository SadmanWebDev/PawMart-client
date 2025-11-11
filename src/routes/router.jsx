import { createBrowserRouter } from "react-router";
import MainLayout from "../components/Layout/MainLayout";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";
import ListingDetails from "../pages/Listings/ListingDetails";
import MyListings from "../pages/Listings/MyListings";
import MyOrders from "../pages/Orders/MyOrders";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import PetsSupplies from "../pages/PetsSupplies/PetsSupplies";
import ProtectedRoute from "./ProtectedRoute";
import CategoryFiltered from "../pages/CategoryFiltered/CategoryFiltered";
import AddListing from "../pages/Listings/AddListing";

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
        path: "/category-filtered-product/:categoryName",
        Component: CategoryFiltered,
      },
      {
        path: "/add-listing",
        element: (
          <ProtectedRoute>
            <AddListing />
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
        path: "/my-orders",
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
