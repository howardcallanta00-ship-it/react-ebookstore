import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const BookCard = ({ book }) => {

  // Access addToCart from global context — same as Module 3's ProductCard
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card h-100 shadow-sm fade-in">

      {/* Book cover image with genre badge and zoom — same as Module 1 */}
      <div className="book-img-wrapper">
        {book.genre && (
          <div className="genre-badge">{book.genre}</div>
        )}
        <img
          src={book.image}
          className="card-img-top book-img"
          alt={book.title}
        />
      </div>

      <div className="card-body d-flex flex-column">
        <h6 className="card-title fw-bold">{book.title}</h6>

        {/* Author */}
        <small className="text-muted mb-2">
          <i className="fa fa-user me-1"></i>{book.author}
        </small>

        {/* Star rating — same [...Array(5)].map() pattern from Module 1 */}
        <div className="mb-2 text-warning">
          {[...Array(5)].map((star, index) => (
            <i
              key={index}
              className={`fa-star ${index < book.rating ? 'fas' : 'far'} fa`}
            ></i>
          ))}
        </div>

        {/* Price with old price strikethrough — same as Module 1 */}
        <div className="mb-2">
          <span className="text-muted text-decoration-line-through me-2">
            ₱{book.oldPrice}
          </span>
          <span className="fw-bold text-danger">₱{book.price}</span>
          {book.discount && (
            <span className="badge bg-warning text-dark ms-2">
              -{book.discount}%
            </span>
          )}
        </div>

        {/* Description snippet */}
        <p className="text-muted small flex-grow-1">{book.description}</p>

        {/* Add to Cart button — triggers addToCart from context, same as Module 3 */}
        <button
          className="btn btn-primary mt-auto"
          onClick={() => addToCart(book)}
        >
          <i className="fa fa-shopping-cart me-2"></i>Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookCard;