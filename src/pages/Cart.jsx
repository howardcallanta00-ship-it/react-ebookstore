import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {

  // Access global cart state and actions — same as Module 3
  const { cart, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);

  // Compute total — same reduce() pattern from Module 3
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Currency formatter — same formatPrice helper from Module 3
  const formatPrice = (value) =>
    value.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  // Empty cart message
  if (cart.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <i className="fa fa-shopping-cart fa-3x text-muted mb-3"></i>
        <h3>Your cart is empty</h3>
        <p className="text-muted">Go browse our books and add something you love!</p>
        <Link to="/books" className="btn btn-primary">Browse Books</Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">
        <i className="fa fa-shopping-cart me-2"></i>Shopping Cart
      </h2>

      {/* Cart items — same map() + card pattern from Module 3 */}
      {cart.map(item => (
        <div key={item.id} className="card mb-3 shadow-sm">
          <div className="card-body">
            <div className="row align-items-center">

              {/* Book cover thumbnail */}
              <div className="col-12 col-md-2 mb-3 mb-md-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid rounded"
                  style={{ height: "80px", objectFit: "cover", width: "60px" }}
                />
              </div>

              {/* Book info */}
              <div className="col-12 col-md-4 mb-3 mb-md-0">
                <h5 className="mb-1">{item.title}</h5>
                <small className="text-muted">by {item.author}</small><br />
                <small className="text-muted">₱{formatPrice(item.price)} each</small>
              </div>

              {/* Quantity controls — same + / - buttons from Module 3 */}
              <div className="col-12 col-md-3 mb-3 mb-md-0 text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="btn btn-outline-secondary btn-sm"
                  >−</button>
                  <span className="mx-3 fw-bold">{item.qty}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="btn btn-outline-secondary btn-sm"
                  >+</button>
                </div>
              </div>

              {/* Subtotal + Remove */}
              <div className="col-12 col-md-3 text-center text-md-end">
                <p className="fw-bold mb-1">₱{formatPrice(item.price * item.qty)}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="btn btn-outline-danger btn-sm"
                >
                  <i className="fa fa-trash me-1"></i>Remove
                </button>
              </div>

            </div>
          </div>
        </div>
      ))}

      {/* Total section + Checkout button — same pattern as Module 3 */}
      {cart.length > 0 && (
        <div className="card shadow mt-4">
          <div className="card-body d-flex flex-column flex-md-row justify-content-between align-items-center">
            <h4 className="mb-3 mb-md-0">
              Total: ₱{formatPrice(total)}
            </h4>
            <Link to="/checkout" className="btn btn-success btn-lg">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;