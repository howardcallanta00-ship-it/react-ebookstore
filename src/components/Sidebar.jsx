import { useEffect, useState } from 'react';

/*
  Sidebar receives two props from the parent page:
  - onSearch: function called when user types in the search box
  - onGenreSelect: function called when user clicks a genre
  - selectedGenre: the currently selected genre (so we can highlight it)

  Why props? Because the parent page (BookList) controls the filtering logic.
  The Sidebar just tells the parent what the user picked.
*/
const Sidebar = ({ onSearch, onGenreSelect, selectedGenre }) => {

  const [genres, setGenres] = useState([]);

  // Fetch genres from backend — same as Module 2's dynamic categories bonus task
  useEffect(() => {
    fetch("http://localhost:5000/api/genres")
      .then(res => res.json())
      .then(data => setGenres(data))
      .catch(() => {
        // Fallback list if backend is not running
        setGenres(["Fiction", "Science", "Self-Help", "Business", "Fantasy", "History", "Technology"]);
      });
  }, []);

  return (
    <aside className="bg-light p-3 rounded shadow-sm">

      {/* ── Search Bar ── */}
      <h6 className="fw-bold mb-2">
        <i className="fa fa-search me-2 text-secondary"></i>Search
      </h6>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search books..."
        onChange={(e) => onSearch(e.target.value)}
      />

      {/* ── Genre Filter ── */}
      <h6 className="fw-bold mb-2">
        <i className="fa fa-tags me-2 text-secondary"></i>Genre
      </h6>
      <ul className="list-group">

        {/* "All" option to reset filter */}
        <li
          className={`list-group-item list-group-item-action ${selectedGenre === "" ? "active" : ""}`}
          onClick={() => onGenreSelect("")}
          style={{ cursor: "pointer" }}
        >
          All Genres
        </li>

        {/* Dynamically rendered genres from API */}
        {genres.map((genre, index) => (
          <li
            key={index}
            className={`list-group-item list-group-item-action ${selectedGenre === genre ? "active" : ""}`}
            onClick={() => onGenreSelect(genre)}
            style={{ cursor: "pointer" }}
          >
            {genre}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;