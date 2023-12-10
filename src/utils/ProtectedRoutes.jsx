import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LinkContext } from "../context/LinkContext";

const ProtectedRoutes = ({ children }) => {
  const { userData } = useContext(LinkContext);
  const isLoggedIn = userData;

  return isLoggedIn ? children : <Navigate to="/auth/sign-in" />;
};

export default ProtectedRoutes;
