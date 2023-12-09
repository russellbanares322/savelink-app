import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import { auth } from "../../config/firebaseConfig";

const GoogleSignin = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success("Successfully logged in");
      if (user !== null) {
        navigate("/");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <Button
      onClick={handleSignIn}
      title="Sign in with Google"
      icon={<FcGoogle className="pointer-events-none" size={25} />}
      type="button"
    />
  );
};

export default GoogleSignin;
