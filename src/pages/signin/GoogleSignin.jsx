import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebaseConfig";

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
      <button
        onClick={handleSignIn}
        className="flex items-center justify-center gap-4 bg-blue text-white h-16 w-64 rounded-lg hover:bg-slate-900"
      >
        <FcGoogle className="pointer-events-none" size={25} /> Sign in with
        Google
      </button>
    </div>
  );
};

export default GoogleSignin;
