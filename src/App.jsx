import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header   from './components/Header';
import Navbar   from './components/Navbar';
import Footer   from './components/Footer';

import Home     from './pages/Home';
import BookList from './pages/BookList';
import Cart     from './pages/Cart';
import Checkout from './pages/Checkout';
import About    from './pages/About';
import Contact  from './pages/Contact';

function App() {
  return (
    <Router>
      {/* These stay visible on every page — same as Module 1 */}
      <Header />
      <Navbar />

      <div className="container-fluid px-4 py-4">
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/books"    element={<BookList />} />
          <Route path="/cart"     element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about"    element={<About />} />
          <Route path="/contact"  element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;