import React, { useState } from "react";
import { FallingLines } from "react-loader-spinner";
import useFetch from "../../hooks/useFetch";
import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";
import Modal from "../modal/Modal";
import moment from "moment";

const LinkList = () => {
  const { data, isLoading } = useFetch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState({});

  const handleOpenModal = (selectedLink) => {
    setIsModalOpen(true);
    setSelectedData(selectedLink);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mt-24">
      <h1 className="text-blue font-bold">Important Links</h1>
      <input
        className="my-3 w-full rounded-lg h-8 focus:ring-2 ring-blue bg-gray-600 p-2 font-bold text-white outline-none"
        type="text"
        placeholder="Search links here..."
      />
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
              className="bg-white mt-2 text-blue rounded-lg p-3 flex justify-between items-center"
            >
              <div>
                <p className="mb-1 font-bold text-sm">
                  {doc.description.toUpperCase()}
                </p>
                <a target="_blank" className="text-xs italic" href={doc.link}>
                  {doc.link}
                </a>
                <p className="text-xs mt-2">
                  {moment(doc.timeStamp.toDate()).format("ddd MMM DD YYYY")}
                </p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <button>
                  <HiOutlinePencilAlt size={20} />
                </button>
                <button onClick={() => handleOpenModal(doc)}>
                  <HiOutlineTrash size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {isModalOpen && (
        <Modal
          selectedData={selectedData}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default LinkList;
