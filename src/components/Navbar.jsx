import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Navbar = () => {

  // Access global cart — same as Module 3's Navbar
  const { cart } = useContext(CartContext);

  // Total quantity across all items — same reduce() pattern from Module 3
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      {/* ── DESKTOP NAVBAR ── */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-none d-lg-block shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold" to="/">
            <i className="fa fa-book-open me-1 text-purple"></i> HMC EBooks
          </NavLink>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  to="/" end
                >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  to="/books"
                >Books</NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  to="/about"
                >About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  to="/contact"
                >Contact</NavLink>
              </li>

              {/* Cart icon with badge — same as Module 3 */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">
                  <i className="fa fa-shopping-cart"></i>
                  <span className="badge bg-danger ms-1">{totalQty}</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ── MOBILE BOTTOM NAVIGATION (Module 5) ── */}
      <nav className="navbar fixed-bottom bg-light border-top d-lg-none shadow-lg">
        <div className="container-fluid d-flex justify-content-around text-center">

          <NavLink to="/" end className={({ isActive }) => isActive ? "text-primary text-decoration-none" : "text-dark text-decoration-none"}>
            <div>
              <i className="fa fa-home fs-5"></i>
              <div style={{ fontSize: "12px" }}>Home</div>
            </div>
          </NavLink>

          <NavLink to="/books" className={({ isActive }) => isActive ? "text-primary text-decoration-none" : "text-dark text-decoration-none"}>
            <div>
              <i className="fa fa-book fs-5"></i>
              <div style={{ fontSize: "12px" }}>Books</div>
            </div>
          </NavLink>

          {/* Cart with badge on mobile */}
          <NavLink to="/cart" className={({ isActive }) => isActive ? "text-primary text-decoration-none" : "text-dark text-decoration-none"}>
            <div className="position-relative">
              <i className="fa fa-shopping-cart fs-5"></i>
              {totalQty > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "10px" }}
                >
                  {totalQty}
                </span>
              )}
              <div style={{ fontSize: "12px" }}>Cart</div>
            </div>
          </NavLink>

          <NavLink to="/about" className={({ isActive }) => isActive ? "text-primary text-decoration-none" : "text-dark text-decoration-none"}>
            <div>
              <i className="fa fa-info-circle fs-5"></i>
              <div style={{ fontSize: "12px" }}>About</div>
            </div>
          </NavLink>

        </div>
      </nav>
    </>
  );
};

export default Navbar;