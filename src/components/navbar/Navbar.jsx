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
          className="bg-blue text-white h-8 w-36 rounded-lg"
        >
          Add link
        </button>
      </div>
      {isModalOpen && <Form setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default Navbar;
