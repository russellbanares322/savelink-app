import React from "react";
import useFetch from "../../hooks/useFetch";

const SortDate = () => {
  const { handleSortChange, sortByDate } = useFetch();

  return (
    <div>
      <h6 className="text-sm">Sort by date</h6>
      <select
        value={sortByDate}
        onChange={handleSortChange}
        className="bg-blue text-white px-2 mt-2"
      >
        <option value="desc">Newest</option>
        <option value="asc">Oldest</option>
      </select>
    </div>
  );
};

export default SortDate;
