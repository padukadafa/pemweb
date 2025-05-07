import { useBooks } from "../context/BookContext";
import BookForm from "../components/BookForm";
import { useState } from "react";

const Manage = () => {
  const { addBook, updateBook } = useBooks();
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSubmit = (book) => {
    if (selectedBook) {
      updateBook(book);
      setSelectedBook(null);
    } else {
      addBook(book);
    }
  };

  return (
    <div>
      <h2>{selectedBook ? "Edit Buku" : "Tambah Buku"}</h2>
      <BookForm book={selectedBook} onSubmit={handleSubmit} />
    </div>
  );
};

export default Manage;
