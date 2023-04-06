import React, { useState } from "react";
import Form from "../form/Form";
import logo from "/linksve_logo.png";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center mt-5">
        <img className="h-12 w-14" src={logo} />
        <button
          onClick={handleToggleModal}
          className="bg-blue text-white h-8 w-28 text-sm md:text-md md:h-8 md:w-36 rounded-lg"
        >
          Add link
        </button>
      </div>
      <Form isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default Navbar;
