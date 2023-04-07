import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import {
  HiOutlineChevronDown,
  HiOutlineLink,
  HiOutlineLogout,
} from "react-icons/hi";
import { auth } from "../../config/firebaseConfig";
import Form from "../form/Form";
import logo from "/linksve_logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleToggleModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(!isModalOpen);
  };

  const handleToggleOption = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Successfully logged out");
      navigate("/sign-in");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center mt-5">
        <img className="h-12 w-14" src={logo} />
        <div
          tabIndex={0}
          onBlur={() => setIsOptionsOpen(false)}
          className="relative w-full"
        >
          <p className="text-sm flex justify-end items-center gap-2">
            Hello, <strong>{user?.displayName}</strong>
            <HiOutlineChevronDown
              onClick={handleToggleOption}
              className={`cursor-pointer duration-100 ease-out ${
                isOptionsOpen && "rotate-[180deg]"
              }`}
              size={18}
            />
          </p>
          <div
            className={`bg-white h-auto w-auto absolute top-7 -right-0 rounded-lg text-sm p-2 flex flex-col justify-start items-start duration-100 ease-in-out ${
              !isOptionsOpen && "scale-0"
            }`}
          >
            <p
              onClick={handleToggleModal}
              className="cursor-pointer hover:bg-blue hover:text-white p-1 rounded-lg flex justify-start items-center gap-1 w-auto"
            >
              Add Link <HiOutlineLink />
            </p>
            <p
              onClick={handleLogout}
              className="cursor-pointer hover:bg-blue hover:text-white p-1 rounded-lg flex justify-start items-center gap-1 w-full"
            >
              Logout <HiOutlineLogout />
            </p>
          </div>
        </div>
      </div>
      <Form isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default Navbar;
