import React, { useState, useEffect } from "react";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { auth, db } from "../../config/firebaseConfig";
import { HiOutlineX } from "react-icons/hi";
import { useAuthState } from "react-firebase-hooks/auth";

const UpdateLinkForm = ({
  isUpdateModalOpen,
  setIsUpdateModalOpen,
  selectedData,
}) => {
  const [formInput, setFormInput] = useState({
    description: "",
    link: "",
  });
  const [user] = useAuthState(auth);

  const handleInputChange = (e) => {
    e.stopPropagation();
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!formInput.description || !formInput.link) {
      return toast.error("Fields cannot be left empty");
    }
    try {
      const linksRef = doc(db, "LinksDB", selectedData?.id);
      await updateDoc(linksRef, {
        description: formInput.description,
        link: formInput.link,
        timeStamp: serverTimestamp(),
        userId: user?.uid,
      });
      toast.success("Successfully updated data");
      setIsUpdateModalOpen(false);
      setFormInput({
        description: "",
        link: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleCloseModal = () => {
    setIsUpdateModalOpen(false);
  };

  useEffect(() => {
    setFormInput({
      ...formInput,
      description: selectedData.description,
      link: selectedData.link,
    });
  }, [selectedData]);

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-20 transition duration-100 ease-in-out ${
        !isUpdateModalOpen && "scale-0"
      }`}
    >
      <form
        onSubmit={handleUpdate}
        className="flex flex-col text-blue w-80 bg-white pb-5 pt-2 px-3 rounded-lg translate-y-[-10px] h-auto m-3 md:m-0 shadow-light-blue shadow transition duration-100 ease-in-out"
      >
        <HiOutlineX
          onClick={handleCloseModal}
          className="ml-auto cursor-pointer text-blue"
          size={23}
        />
        <label className="font-bold">Description</label>
        <input
          value={formInput.description}
          className="rounded-lg h-8 focus:ring-2 ring-blue bg-gray-600 p-2 text-white outline-none"
          name="description"
          type="text"
          placeholder="Enter description..."
          onChange={handleInputChange}
        />
        <label className="mt-3 font-bold">Link</label>
        <input
          value={formInput.link}
          className="rounded-lg h-8 focus:ring-2 ring-blue bg-gray-600 p-2 text-white outline-none"
          name="link"
          type="text"
          placeholder="Enter link..."
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="w-full bg-blue text-white mt-8 h-10 rounded-lg p-2 font-bold"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateLinkForm;
