import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebaseConfig";
import logo from "/linksve_logo.png";

const GoogleSignin = () => {
  const navigate = useNavigate();

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
      toast.success("Successfully logged in");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col justify-center items-center bg-white py-10 px-5 gap-8 rounded-lg shadow-xl">
        <img className="h-14 w-16" src={logo} />
        <h1 className="font-bold text-blue">
          Welcome to Linksve, save your important links.
        </h1>
        <button
          onClick={handleSignIn}
          className="flex items-center justify-center gap-4 bg-blue text-white h-12 w-60 md:h-16 md:w-64 rounded-lg hover:bg-slate-900"
        >
          <FcGoogle className="pointer-events-none" size={25} /> Sign in with
          Google
        </button>
      </div>
    </div>
  );
};

export default GoogleSignin;
