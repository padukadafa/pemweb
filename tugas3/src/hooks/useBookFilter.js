const useBookFilter = (books, statusFilter, search) => {
  return books.filter((book) => {
    const matchesStatus =
      statusFilter === "all" || book.status === statusFilter;
    const matchesSearch = book.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesStatus && matchesSearch;
  });
};

export default useBookFilter;
