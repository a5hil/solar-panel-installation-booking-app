import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="/">
          ☀ SPI BOOKING APP
        </a>

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

            <a className="nav-link" href="/">Home</a>

            <a className="nav-link" href="/add">Add Customer</a>
            <a className="nav-link" href="/view">View Customer</a>

            <a className="nav-link" href="/addinstall">
              Add Solar Installation
            </a>

            <a className="nav-link" href="/viewinstall">
              View Solar Installation
            </a>

            <a className="nav-link" href="/addteam">
              Add Installation Team
            </a>

            <a className="nav-link" href="/viewteam">
              View Installation Team
            </a>

            <a className="nav-link" href="/addpayment">
              Add Payment
            </a>

            <a className="nav-link" href="/viewpayment">
              View Payment
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

