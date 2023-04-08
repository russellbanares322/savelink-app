import React from "react";
import { HiOutlineArrowSmDown, HiOutlineArrowSmUp } from "react-icons/hi";

const Pagination = ({ paginate, data, filteredData, setPaginate }) => {
  const loadedAll = filteredData.length === data.length;
  const handleLoadContent = () => {
    if (loadedAll && paginate !== 4) {
      setPaginate((prev) => prev - 4);
    } else {
      setPaginate((prev) => prev + 4);
    }
  };

  return (
    <div className="flex justify-center items-center mt-2">
      <button
        className="bg-blue text-white h-8 w-28 text-sm rounded-lg flex justify-center items-center"
        onClick={handleLoadContent}
      >
        {loadedAll && (
          <>
            Show Less <HiOutlineArrowSmUp size={20} />
          </>
        )}
        {!loadedAll && (
          <>
            Show More <HiOutlineArrowSmDown size={20} />
          </>
        )}
      </button>
    </div>
  );
};

export default Pagination;
