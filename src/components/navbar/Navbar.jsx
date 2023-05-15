import React, { useState, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  HiOutlineChevronDown,
  HiOutlineLink,
  HiOutlineLogout,
} from "react-icons/hi";
import { auth } from "../../config/firebaseConfig";
import Form from "../form/AddLinkForm";
import logo from "/linksve_logo.png";
import { LinkContext } from "../../context/LinkContext";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const { handleLogout } = useContext(LinkContext);
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
            className={`bg-white h-auto drop-shadow-md w-auto absolute top-7 -right-0 rounded-md text-sm flex flex-col justify-start items-start duration-100 ease-in-out ${
              !isOptionsOpen && "scale-0"
            }`}
          >
            <p
              onClick={handleToggleModal}
              className="p-2 rounded-tr-md rounded-tl-md cursor-pointer transition duration-300 ease-in-out hover:bg-blue hover:text-white flex justify-start items-center gap-1 w-auto"
            >
              Add Link <HiOutlineLink />
            </p>
            <p
              onClick={handleLogout}
              className="p-2 rounded-br-md rounded-bl-md cursor-pointer transition duration-300 ease-in-out hover:bg-blue hover:text-white flex justify-start items-center gap-1 w-full"
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
