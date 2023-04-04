import React, { useState } from "react";
import Form from "../form/Form";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center mt-5">
        <h3 className="font-bold">SaveLink</h3>
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
