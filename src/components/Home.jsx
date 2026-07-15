function Home() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="display-4 text-success">
          Solar Panel Installation Booking
        </h1>

        <p className="lead mt-3">
          Save Energy. Save Money. Save the Planet.
        </p>

<section className="container-fluid p-0">
  <img
    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=2000"
    className="img-fluid w-100"
    style={{
      height: "100vh",
      objectFit: "cover",
    }}
    alt="Solar"
  />
</section>

        {/* <div className="mt-4">
          <button className="btn btn-success btn-lg me-3">
            Book Installation
          </button>

          <button className="btn btn-outline-dark btn-lg">
            View Bookings
          </button>
        </div> */}
      </div>

      <div className="row mt-5 text-center">
        <div className="col-md-4">
          <h4>☀ Clean Energy</h4>
          <p>Reduce your electricity bills with solar power.</p>
        </div>

        <div className="col-md-4">
          <h4>⚡ Fast Installation</h4>
          <p>Professional installation by certified experts.</p>
        </div>

        <div className="col-md-4">
          <h4>🌍 Eco Friendly</h4>
          <p>Contribute to a greener and cleaner environment.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;