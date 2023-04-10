import React from "react";
import { HiOutlineArrowSmDown, HiOutlineArrowSmUp } from "react-icons/hi";

const Pagination = ({ paginate, data, filteredData, setPaginate }) => {
  const isLoadedAll = filteredData.length === data.length;
  const showButton = data.length > 4;

  const handleLoadContent = () => {
    if (isLoadedAll && paginate !== 4) {
      setPaginate((prev) => prev - 4);
    } else {
      setPaginate((prev) => prev + 4);
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
