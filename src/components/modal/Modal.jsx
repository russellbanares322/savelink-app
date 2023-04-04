import React from "react";
import { HiOutlineX } from "react-icons/hi";

const Modal = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white translate-y-[-10px] h-[13rem] w-[25rem] rounded-xl p-3 m-3 md:m-0">
        <HiOutlineX className="ml-auto cursor-pointer text-blue" size={23} />
        <h1 className="mt-5 text-md text-blue font-bold px-4">
          Are you sure do you want to delete this data?
        </h1>
        <div className="flex justify-evenly items-center mt-9 md:mt-12 gap-3 mb-3">
          <button className="w-full h-9 bg-red text-white rounded-lg">
            Confirm
          </button>
          <button className="w-full h-9 bg-blue text-white rounded-lg">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
