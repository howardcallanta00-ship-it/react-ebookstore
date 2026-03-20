import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import banner from '../assets/images/banner.jpg';

const Home = () => {
  const [books, setBooks]     = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/books")
      .then(res => res.json())
      .then(data => {
        setBooks(data.slice(0, 4));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <h3 className="text-center mt-5">Loading books...</h3>;
  }

  return (
    <div className="container mt-4">

      {/* ── BANNER WITH TEXT OVERLAY ── */}
      <div className="banner-wrapper mb-5">

        {/* Background image */}
        <img
          src={banner}
          className="banner-image"
          alt="PageTurner Banner"
        />

        {/* Dark overlay so text is readable over any image */}
        <div className="banner-overlay"></div>

        {/* Text content sitting on top of the overlay */}
        <div className="banner-content">

          {/* Small label above the title */}
          <span className="banner-label">
            <i className="fa fa-book-open me-2"></i>Welcome to HMC Ebooks
          </span>

          {/* Main headline */}
          <h1 className="banner-title">
            Knowledge at Your Fingertips
          </h1>

          {/* Professional tagline */}
          <p className="banner-tagline">
            Explore our curated collection of ebooks spanning literature, science,
            business, and beyond. Thoughtfully selected to enrich your personal
            and professional growth.
          </p>

          {/* Call-to-action buttons */}
          <div className="banner-buttons">
            <Link to="/books" className="btn btn-primary btn-lg me-3">
              <i className="fa fa-search me-2"></i>Browse Collection
            </Link>
            <Link to="/about" className="btn btn-outline-light btn-lg">
              Learn More
            </Link>
          </div>

        </div>
      </div>

      {/* ── FEATURED BOOKS SECTION ── */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Featured Books</h2>
        <Link to="/books" className="btn btn-outline-primary">
          View All Books
        </Link>
      </div>

      <div className="row">
        {books.map(book => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={book.id}>
            <BookCard book={book} />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;