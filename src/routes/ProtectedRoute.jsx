import React, { use } from "react";
import { AuthContext } from "../pages/Auth/AuthContext";
import { Navigate } from "react-router";
import Loader from "../components/Loader/Loader";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return <Loader></Loader>;
  }

  if (!user) {
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
