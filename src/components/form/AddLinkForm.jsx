import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { auth, db } from "../../config/firebaseConfig";
import { HiOutlineX } from "react-icons/hi";
import { useAuthState } from "react-firebase-hooks/auth";

const Form = ({ isModalOpen, setIsModalOpen }) => {
  const [formInput, setFormInput] = useState({
    description: "",
    link: "",
  });
  const [user] = useAuthState(auth);

  const handleInputChange = (e) => {
    e.stopPropagation();
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!formInput.description || !formInput.link) {
      return toast.error("Fields cannot be left empty");
    } else if (formInput.description.includes(":")) {
      return toast.error(
        "This is for description only, use the other input to save link"
      );
    }
    try {
      const linksRef = collection(db, "LinksDB");
      await addDoc(linksRef, {
        description: formInput.description,
        link: formInput.link,
        timeStamp: serverTimestamp(),
        userId: user?.uid,
      });
      toast.success("Successfully added link");
      setIsModalOpen(false);
      setFormInput({
        description: "",
        link: "",
      });
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-20 transition duration-100 ease-in-out ${
        !isModalOpen && "scale-0"
      }`}
    >
      <form
        onSubmit={handleSubmit}
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
