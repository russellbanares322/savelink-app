import React, { useState } from "react";
import { FallingLines } from "react-loader-spinner";
import useFetch from "../../hooks/useFetch";
import {
  HiOutlineChevronDown,
  HiOutlinePencilAlt,
  HiOutlineTrash,
} from "react-icons/hi";
import Modal from "../modal/Modal";
import moment from "moment";

const LinkList = () => {
  const { data, isLoading } = useFetch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const [selectedActionId, setSelectedActionId] = useState(null);

  const handleOpenModal = (selectedLink) => {
    setIsModalOpen(true);
    setSelectedData(selectedLink);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenActions = (selectedID) => {
    setSelectedActionId((selectedActionId) =>
      selectedActionId === selectedID ? null : selectedID
    );
  };

  return (
    <div className="mt-24">
      <input
        className="my-3 w-full rounded-xl h-10 focus:ring-2 ring-blue bg-gray-600 p-2 font-bold text-white outline-none"
        type="text"
        placeholder="Search links here..."
      />
      <h1 className="text-blue font-bold my-4">Important Links:</h1>
      {isLoading && (
        <div className="flex justify-center items-center pt-2">
          <FallingLines
            color="#0A083A"
            width="100"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        </div>
      )}
      {!isLoading && (
        <div>
          {data.map((doc) => (
            <div
              key={doc.id}
              className="bg-white mt-2 text-blue rounded-lg p-3 flex justify-between items-start drop-shadow-md"
            >
              <div>
                <p className="mb-1 font-bold text-sm">
                  {doc.description.toUpperCase()}
                </p>
                <a target="_blank" className="text-xs italic" href={doc.link}>
                  {doc.link}
                </a>
                <p className="text-xs mt-2">
                  {moment(doc.timeStamp?.toDate()).format("ddd MMM DD YYYY")}
                </p>
              </div>
              <div
                onClick={() => handleOpenActions(doc.id)}
                className="relative"
              >
                <HiOutlineChevronDown
                  className={`cursor-pointer transition duration-200 ease-in-out ${
                    selectedActionId === doc.id ? "rotate-[180deg]" : "rotate-0"
                  }`}
                  size={18}
                />
                <div
                  className={`${
                    selectedActionId !== doc.id && "scale-0"
                  } origin-top duration-200 p-1 absolute top-6 bg-white text-blue drop-shadow-md left-[-37px] rounded-xs gap-2 flex items-center justify-center`}
                >
                  <button>
                    <HiOutlinePencilAlt size={20} />
                  </button>
                  <button onClick={() => handleOpenModal(doc)}>
                    <HiOutlineTrash size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {isModalOpen && (
        <Modal
          selectedData={selectedData}
          handleCloseModal={handleCloseModal}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default LinkList;
