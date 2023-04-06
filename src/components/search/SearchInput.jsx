import React from "react";

const SearchInput = ({ setSearchInput }) => {
  return (
    <div>
      <input
        onChange={(event) => setSearchInput(event.target.value)}
        className="my-3 w-full rounded-xl h-10 focus:ring-2 ring-blue bg-gray-600 p-4 font-bold text-white outline-none placeholder:font-normal"
        type="text"
        placeholder="Search links here..."
      />
    </div>
  );
};

export default SearchInput;
