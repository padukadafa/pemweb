import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const BookForm = ({ onSubmit, book }) => {
  const [form, setForm] = useState({ title: "", author: "", status: "owned" });

  useEffect(() => {
    if (book) setForm(book);
  }, [book]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.author.trim()) {
      alert("Judul dan Penulis harus diisi");
      return;
    }
    onSubmit({ ...form, id: form.id || Date.now().toString() });
    setForm({ title: "", author: "", status: "owned" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Judul"
        value={form.title}
        onChange={handleChange}
      />
      <input
        name="author"
        placeholder="Penulis"
        value={form.author}
        onChange={handleChange}
      />
      <select name="status" value={form.status} onChange={handleChange}>
        <option value="owned">Dimiliki</option>
        <option value="reading">Sedang Dibaca</option>
        <option value="wishlist">Ingin Dibeli</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  book: PropTypes.object,
};

export default BookForm;
