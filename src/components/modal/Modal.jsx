import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import toast from "react-hot-toast";
import { HiOutlineX } from "react-icons/hi";
import { db } from "../../config/firebaseConfig";

const Modal = ({ handleCloseModal, selectedData, setIsModalOpen }) => {
  const handleDeleteData = async () => {
    try {
      const savedLinkRef = doc(db, "LinksDB", selectedData.id);
      await deleteDoc(savedLinkRef);
      toast.success("Successfully deleted data");
      setIsModalOpen(false);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70">
      <div className="bg-white translate-y-[-10px] h-auto w-[25rem] rounded-xl p-3 m-3 md:m-0">
        <HiOutlineX
          onClick={handleCloseModal}
          className="ml-auto cursor-pointer text-blue"
          size={23}
        />
        <h1 className="mt-5 text-md text-blue font-bold px-4">
          Are you sure do you want to delete {selectedData.description}?
        </h1>
        <div className="flex justify-evenly items-center mt-9 md:mt-12 gap-3 mb-3">
          <button
            onClick={handleDeleteData}
            className="w-full h-9 bg-red text-white rounded-lg"
          >
            Confirm
          </button>
          <button
            onClick={handleCloseModal}
            className="w-full h-9 bg-blue text-white rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
