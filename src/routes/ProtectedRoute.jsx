import React, { use } from "react";
import { AuthContext } from "../pages/Auth/AuthContext";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return <p>loading</p>;
  }

  if (!user) {
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
