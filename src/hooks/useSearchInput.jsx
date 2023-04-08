const useSearchInput = (searchInput, data, paginate) => {
  if (!searchInput) {
    return data.slice(0, paginate);
  }

  return data.filter((item) =>
    item.description.toLowerCase().includes(searchInput.toLowerCase())
  );
};

export default useSearchInput;
