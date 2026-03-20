const Contact = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h2>Contact Us</h2>
          <p className="text-muted">Have a question? We'd love to hear from you.</p>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4"></textarea>
            </div>
            <button className="btn btn-primary">
              <i className="fas fa-paper-plane me-2"></i>Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;