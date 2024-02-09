import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import { auth } from "../../config/firebaseConfig";

const GoogleSignin = () => {
  const navigate = useNavigate();

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider).then((res) => {
        localStorage.setItem(
          "linksve-user-info",
          JSON.stringify({
            email: res?.user?.email,
            displayName: res?.user?.displayName,
            uid: res?.user?.uid,
          })
        );
        navigate("/");
        toast.success("Successfully logged in");
      });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="mt-2">
      <Button
        onClick={handleSignIn}
        title="Sign in with Google"
        icon={<FcGoogle className="pointer-events-none" size={25} />}
        type="button"
      />
    </div>
  );
};

export default GoogleSignin;
