const About = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-8">
          <h2><i className="fa fa-book-open me-2"></i>About HMC EbookStore</h2>
          <p className="text-muted mt-3">
            Technical Assessment 4: Project Documentation
          </p>
          <p className="text-muted mt-3">
            Name: Howard Mac M. Callanta
          </p>
          <p className="text-muted mt-3">
            College: FEUTECH
          </p>
          <p className="text-muted mt-3">
            Block: TB22
          </p>
          <p className="text-muted mt-3">
            HMC Ebooks is a modern digital bookstore designed to make finding and reading books easy. Built using React and Vite, the website is fast and responsive. It uses Bootstrap to ensure the layout looks professional on both computers and mobile devices.
          </p>
          <p className="text-muted mt-3">
            The app offers a wide variety of titles in categories like fiction, science, technology, and self-help, providing a complete library experience for every reader.
          </p>
          <p className="text-muted">
            This project is a full-stack development assignment that connects a React frontend to a Node.js backend. It uses REST APIs to handle data and the Context API to manage information across the entire site, such as keeping track of a user's library.
          </p>
          <p className="text-muted">
            With features like search filters and PWA support, the application works like a high-performance digital tool that is easy to install and use.
          </p>
          <div className="row mt-5 text-center">
            <div className="col-4">
              <i className="fa fa-book fa-2x text-primary mb-2"></i>
              <h5>1,000+</h5>
              <small className="text-muted">Titles</small>
            </div>
            <div className="col-4">
              <i className="fa fa-users fa-2x text-success mb-2"></i>
              <h5>50,000+</h5>
              <small className="text-muted">Readers</small>
            </div>
            <div className="col-4">
              <i className="fa fa-star fa-2x text-warning mb-2"></i>
              <h5>4.8 / 5</h5>
              <small className="text-muted">Rating</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;