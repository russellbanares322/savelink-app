import React from "react";
import { HiOutlineArrowSmDown, HiOutlineArrowSmUp } from "react-icons/hi";

const Pagination = ({ pageNumber, data, filteredData, setPageNumber }) => {
  const isLoadedAll = filteredData.length === data.length;
  const showButton = data.length > 4;

  const handleLoadContent = () => {
    if (isLoadedAll && pageNumber >= 4) {
      return setPageNumber((prev) => prev - 4);
    }
    if (!isLoadedAll) {
      setPageNumber((prev) => prev + 4);
    }
  };

  return (
    <div
      className={`flex justify-center items-center mt-3 ${
        showButton ? "visible" : "hidden"
      }`}
    >
      <button
        className="bg-blue text-white h-8 w-28 text-sm rounded-lg flex justify-center items-center"
        onClick={handleLoadContent}
      >
        {isLoadedAll && (
          <>
            Show Less <HiOutlineArrowSmUp size={20} />
          </>
        )}
        {!isLoadedAll && (
          <>
            Show More <HiOutlineArrowSmDown size={20} />
          </>
        )}
      </button>
    </div>
  );
};

export default Pagination;
