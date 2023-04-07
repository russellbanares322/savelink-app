import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  HiOutlineChevronDown,
  HiOutlineLink,
  HiOutlineLogout,
} from "react-icons/hi";
import { auth } from "../../config/firebaseConfig";
import Form from "../form/Form";
import logo from "/linksve_logo.png";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [user] = useAuthState(auth);

  const handleToggleModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(!isModalOpen);
  };

  const handleToggleOption = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center mt-5">
        <img className="h-12 w-14" src={logo} />
        <div className="relative">
          <p className="text-sm flex justify-center items-center gap-2">
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
            className={`bg-white h-auto w-auto absolute top-7 left-1 rounded-lg text-sm p-2 flex flex-col justify-start items-start duration-100 ease-in-out ${
              !isOptionsOpen && "scale-0"
            }`}
          >
            <p
              onClick={handleToggleModal}
              className="cursor-pointer hover:bg-blue hover:text-white p-1 rounded-lg flex justify-start items-center gap-1 w-full"
            >
              Add Link <HiOutlineLink />
            </p>
            <p className="cursor-pointer hover:bg-blue hover:text-white p-1 rounded-lg flex justify-start items-center gap-1 w-full">
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
