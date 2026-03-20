import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const Checkout = () => {

  // Get cart data and clearCart — same as Module 4
  const { cart, clearCart } = useContext(CartContext);

  // Form state — same controlled form pattern from Module 4
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    payment: 'cod'
  });

  const [submitted, setSubmitted]     = useState(false);
  const [finalTotal, setFinalTotal]   = useState(0);

  // Compute totals — same as Module 4
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax      = subtotal * 0.12;
  const total    = subtotal + tax;

  // Handle input change — same handleChange from Module 4
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit — same handleSubmit from Module 4
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.address || !form.phone) {
      alert("Please complete all fields");
      return;
    }

    // Save total BEFORE clearing cart — same note from Module 4
    setFinalTotal(total);

    // Clear the cart — same clearCart() from Module 4
    clearCart();
    setSubmitted(true);
  };

  // Success screen — same pattern from Module 4
  if (submitted) {
    return (
      <div className="container mt-5 text-center">
        <i className="fa fa-check-circle fa-4x text-success mb-3"></i>
        <h2>Order Confirmed!</h2>
        <p className="text-muted">
          Thank you, <strong>{form.name}</strong>. Your ebooks are ready!
        </p>
        <h5>Total Paid: ₱{finalTotal.toFixed(2)}</h5>
        <p className="text-muted mt-2">
          A confirmation has been sent to <strong>{form.email}</strong>.
        </p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Checkout</h2>

      <div className="row">

        {/* ── Checkout Form (left column) ── */}
        <div className="col-md-6">
          <h4>Customer Information</h4>
          <form onSubmit={handleSubmit}>

            <div className="mb-2">
              <label>Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="mb-2">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="mb-2">
              <label>Address</label>
              <textarea
                name="address"
                className="form-control"
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="mb-2">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label>Payment Method</label>
              <select
                name="payment"
                className="form-control"
                onChange={handleChange}
              >
                <option value="cod">Cash on Delivery</option>
                <option value="gcash">GCash</option>
                <option value="card">Credit Card</option>
              </select>
            </div>

            <button className="btn btn-success w-100">
              <i className="fa fa-lock me-2"></i>Place Order
            </button>

          </form>
        </div>

        {/* ── Order Summary (right column) — same as Module 4 ── */}
        <div className="col-md-6 mt-4 mt-md-0">
          <h4>Order Summary</h4>
          <div className="card shadow-sm">
            <div className="card-body">

              {cart.map(item => (
                <div key={item.id} className="d-flex justify-content-between mb-2">
                  <div>
                    <span className="fw-bold">{item.title}</span>
                    <br />
                    <small className="text-muted">x {item.qty}</small>
                  </div>
                  <span>₱{(item.price * item.qty).toFixed(2)}</span>
                </div>
              ))}

              <hr />
              <p className="d-flex justify-content-between">
                <span>Subtotal</span>
                <span>₱{subtotal.toFixed(2)}</span>
              </p>
              <p className="d-flex justify-content-between">
                <span>Tax (12% VAT)</span>
                <span>₱{tax.toFixed(2)}</span>
              </p>
              <h5 className="d-flex justify-content-between fw-bold">
                <span>Total</span>
                <span>₱{total.toFixed(2)}</span>
              </h5>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;