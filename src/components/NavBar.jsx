import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          ☀ SPI BOOKING APP
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">

            <Link className="nav-link" to="/">Home</Link>

            <Link className="nav-link" to="/add-customer">Add Customer</Link>
                      <Link className="nav-link" to="/view-customer">View Customer</Link>

                      <Link className="nav-link" to="/add-installation">
              Add Solar Installation
            </Link>

                      <Link className="nav-link" to="/view-installation">
              View Solar Installation
            </Link>

            <Link className="nav-link" to="/add-team">
              Add Installation Team
            </Link>

            <Link className="nav-link" to="/view-team">
              View Installation Team
            </Link>

            <Link className="nav-link" to="/add-payment">
              Add Payment
            </Link>

            <Link className="nav-link" to="/view-payment">
              View Payment
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

