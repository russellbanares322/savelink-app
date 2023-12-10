import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../config/firebaseConfig";

const ProtectedRoutes = ({ children }) => {
  const [user] = useAuthState(auth);
  const isLoggedIn = user !== null;

  return isLoggedIn ? children : <Navigate to="/auth/sign-in" />;
};

export default ProtectedRoutes;
