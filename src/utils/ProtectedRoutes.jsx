import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../config/firebaseConfig";

const ProtectedRoutes = ({ children }) => {
  const [user] = useAuthState(auth);
  const isLoggedIn = user !== null;

  if (isLoggedIn) {
    return children;
  }

  return <Navigate to="/auth/sign-in" replace={true} />;
};

export default ProtectedRoutes;
