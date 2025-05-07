import PropTypes from "prop-types";

const BookItem = ({ book, onEdit, onDelete }) => (
  <div>
    <h4>{book.title}</h4>
    <p>
      {book.author} ({book.status})
    </p>
    <button onClick={() => onEdit(book)}>Edit</button>
    <button onClick={() => onDelete(book.id)}>Delete</button>
  </div>
);

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookItem;
