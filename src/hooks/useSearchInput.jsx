import React from "react";

const useSearchInput = (searchInput, data) => {
  if (!searchInput) {
    return data;
  }

  return data.filter((item) =>
    item.description.toLowerCase().includes(searchInput.toLowerCase())
  );
};

export default useSearchInput;
