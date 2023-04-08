import React, { useState } from "react";
import { FallingLines } from "react-loader-spinner";
import useFetch from "../../hooks/useFetch";
import {
  HiOutlineCog,
  HiOutlinePencilAlt,
  HiOutlineTrash,
} from "react-icons/hi";
import Modal from "../modal/Modal";
import moment from "moment";
import SearchInput from "../search/SearchInput";
import useSearchInput from "../../hooks/useSearchInput";
import UpdateLinkForm from "../form/UpdateLinkForm";

const LinkList = () => {
  const { data, isLoading } = useFetch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const [selectedActionId, setSelectedActionId] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const filteredData = useSearchInput(searchInput, data);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

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

  const handleUpdateModal = (selectedLink) => {
    setIsUpdateModalOpen(true);
    setSelectedData(selectedLink);
  };

  return (
    <div className="mt-24">
      <SearchInput setSearchInput={setSearchInput} />
      <h1 className="text-blue font-bold my-4">Important Links:</h1>
      <h1 className="text-center pt-8">
        {data.length === 0 && "You have no links saved yet"}
      </h1>
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
          {filteredData.map((doc) => (
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
                <HiOutlineCog
                  className={`cursor-pointer transition duration-200 ease-in-out ${
                    selectedActionId === doc.id ? "rotate-[180deg]" : "rotate-0"
                  }`}
                  size={19}
                />
                <div
                  className={`${
                    selectedActionId !== doc.id && "scale-0"
                  } origin-top duration-200 p-1 absolute top-6 bg-white text-blue drop-shadow-md left-[-37px] rounded-xs gap-2 flex items-center justify-center`}
                >
                  <button onClick={() => handleUpdateModal(doc)}>
                    <HiOutlinePencilAlt
                      className="transition duration-500 ease-in-out hover:scale-[1.1]"
                      size={20}
                    />
                  </button>
                  <button onClick={() => handleOpenModal(doc)}>
                    <HiOutlineTrash
                      className="hover:text-red transition duration-500 ease-in-out hover:scale-[1.1]"
                      size={20}
                    />
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
      <UpdateLinkForm
        isUpdateModalOpen={isUpdateModalOpen}
        setIsUpdateModalOpen={setIsUpdateModalOpen}
        selectedData={selectedData}
      />
    </div>
  );
};

export default LinkList;
