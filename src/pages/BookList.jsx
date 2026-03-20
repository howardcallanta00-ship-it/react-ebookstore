import { useEffect, useState } from 'react';
import BookCard from '../components/BookCard';
import Sidebar from '../components/Sidebar';

const BookList = () => {
  const [books, setBooks]               = useState([]);   // all books from API
  const [loading, setLoading]           = useState(true);
  const [searchQuery, setSearchQuery]   = useState("");   // search text
  const [selectedGenre, setSelectedGenre] = useState(""); // selected genre filter

  // Fetch ALL books from backend — same as Module 2's ProductList
  useEffect(() => {
    fetch("http://localhost:5000/api/books")
      .then(res => res.json())
      .then(data => {
        setBooks(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <h3 className="text-center mt-5">Loading books...</h3>;
  }

  /*
    Filter logic — this runs every render:
    1. If a genre is selected, keep only books matching that genre
    2. If a search query exists, keep only books whose title or author
       includes the search text (case-insensitive)
    Both filters can apply at the same time.
  */
  const filteredBooks = books
    .filter(book =>
      selectedGenre === "" || book.genre === selectedGenre
    )
    .filter(book =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="container mt-4">
      <div className="row">

        {/* Sidebar — receives callbacks so it can update our state */}
        <div className="col-lg-2 col-md-3 mb-4">
          <Sidebar
            onSearch={setSearchQuery}
            onGenreSelect={setSelectedGenre}
            selectedGenre={selectedGenre}
          />
        </div>

        {/* Books grid */}
        <div className="col-lg-10 col-md-9">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2>All Books</h2>
            <small className="text-muted">
              Showing {filteredBooks.length} of {books.length} books
            </small>
          </div>

          {/* Show message if no results found */}
          {filteredBooks.length === 0 ? (
            <div className="alert alert-info">
              <i className="fa fa-search me-2"></i>
              No books found matching your search.
            </div>
          ) : (
            <div className="row">
              {filteredBooks.map(book => (
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={book.id}>
                  <BookCard book={book} />
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default BookList;