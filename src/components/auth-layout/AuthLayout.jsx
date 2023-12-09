import React from "react";
import GoogleSignin from "../../pages/google-signin/GoogleSignin";
import SignInForm from "../../pages/signin/SigninForm";
import logo from "/linksve_logo.png";

const AuthLayout = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col justify-center items-center bg-white py-10 px-5 gap-7 rounded-lg shadow-xl">
        <img className="h-14 w-16" src={logo} />
        <h1 className="font-bold text-blue flex justify-center items-center gap-2">
          Welcome to Linksve
          <span className="animate-waving-hand text-lg">👋</span>
        </h1>
        <div>
          <SignInForm />
        </div>
        <GoogleSignin />
      </div>
    </div>
  );
};

export default AuthLayout;
