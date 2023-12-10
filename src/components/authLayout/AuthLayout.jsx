import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import GoogleSignin from "../../pages/googleSignin/GoogleSignin";
import logo from "/linksve_logo.png";

const AuthLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isInSignUpPage = location.pathname === "/auth/sign-up";
  const isInSignInPage = location.pathname === "/auth/sign-in";

  const renderLayoutTitles = () => {
    if (isInSignUpPage) {
      return {
        headerText: "Create your Account",
        footerText: (
          <p className="text-sm text-center mt-3 mb-2">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/auth/sign-in")}
              className="font-bold cursor-pointer hover:underline"
            >
              Login your Account
            </span>
          </p>
        ),
      };
    } else if (isInSignInPage) {
      return {
        headerText: "Login to your Account",
        footerText: (
          <p className="text-sm text-center mt-3 mb-2">
            Dont have an account?{" "}
            <span
              onClick={() => navigate("/auth/sign-up")}
              className="font-bold cursor-pointer hover:underline"
            >
              Create an Account
            </span>
          </p>
        ),
      };
    }
  };

  return (
    <div className="flex items-center justify-center h-full text-blue">
      <div className=" bg-white py-8 px-10 rounded-lg shadow-xl">
        <div className="flex items-center justify-center">
          <img className="h-14 w-16" src={logo} />
        </div>
        <div className="mb-7 mt-2">
          <h1 className="font-bold flex justify-center items-center gap-2 mb-1">
            Welcome to Linksve
            <span className="animate-waving-hand text-lg">👋</span>
          </h1>
          <h1 className="text-center text-sm">
            {renderLayoutTitles().headerText}
          </h1>
        </div>
        <Outlet />
        {renderLayoutTitles().footerText}
        <div className="flex items-center justify-between gap-1 w-full">
          <div className="w-full h-[1px] bg-black" />
          <span>OR</span>
          <div className="w-full h-[1px] bg-black" />
        </div>
        <GoogleSignin />
      </div>
    </div>
  );
};

export default AuthLayout;
