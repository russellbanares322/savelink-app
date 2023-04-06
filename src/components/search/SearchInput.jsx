import React from "react";
import { HiOutlineSearch } from "react-icons/hi";

const SearchInput = ({ setSearchInput }) => {
  return (
    <div className="relative focus-within:text-white">
      <input
        onChange={(event) => setSearchInput(event.target.value)}
        className="my-3 w-full rounded-xl h-10 focus:ring-2 ring-blue bg-gray-600 p-4 font-bold text-white outline-none placeholder:font-normal"
        type="text"
        placeholder="Search links here..."
      />
      <HiOutlineSearch
        className="absolute right-5 top-[23px] pointer-events-none"
        size={18}
      />
    </div>
  );
};

export default SearchInput;
