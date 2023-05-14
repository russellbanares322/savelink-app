const useSearchInput = (searchInput, data, pageNumber) => {
  if (!searchInput) {
    return data.slice(0, pageNumber);
  }

  return data.filter((item) =>
    item.description.toLowerCase().includes(searchInput.toLowerCase())
  );
};

export default useSearchInput;
