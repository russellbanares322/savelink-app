import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebaseConfig";
import logo from "/linksve_logo.png";

const GoogleSignin = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success("Successfully logged in");
      if (user !== null) {
        navigate("/links");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col justify-center items-center bg-white py-10 px-5 gap-8 rounded-lg shadow-xl">
        <img className="h-14 w-16" src={logo} />
        <h1 className="font-bold text-blue flex justify-center items-center gap-2">
          Welcome to Linksve
          <span className="animate-waving-hand text-lg">👋</span>
        </h1>
        <button
          onClick={handleSignIn}
          className="flex items-center justify-center gap-4 bg-blue text-white h-12 w-64 md:h-16 md:w-64 rounded-lg hover:bg-slate-900"
        >
          <FcGoogle className="pointer-events-none" size={25} /> Sign in with
          Google
        </button>
      </div>
    </div>
  );
};

export default GoogleSignin;
