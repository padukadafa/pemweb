import { useBooks } from "../context/BookContext";
import BookItem from "../components/BookItem";
import useBookFilter from "../hooks/useBookFilter";
import FilterTabs from "../components/FilterTabs";
import { useState } from "react";

const Home = () => {
  const { books, deleteBook } = useBooks();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const filtered = useBookFilter(books, statusFilter, search);

  return (
    <div>
      <h2>Daftar Buku</h2>
      <input
        placeholder="Cari buku..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <FilterTabs
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />
      {filtered.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          onDelete={deleteBook}
          onEdit={() => {}}
        />
      ))}
    </div>
  );
};

export default Home;
