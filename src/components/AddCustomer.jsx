import axios from "axios";
import React, { useState } from "react";

const AddCustomer = () => {
  const [input, changeInput] = useState({
    bookingId: "",
    customerName: "",
    email: "",
    phoneNumber: "",
    alternatePhoneNumber: "",
    propertyAddress: "",
    city: "",
    state: "",
    pinCode: "",
    propertyType: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const inputHandler = (e) => {
    changeInput({ ...input, [e.target.name]: e.target.value });
  };

  const readValues = () => {
    axios
      .post("http://localhost:3000/", input)
      .then(() => {
        setMessage("Booking added successfully");
        setError("");

        changeInput({
          bookingId: "",
          customerName: "",
          email: "",
          phoneNumber: "",
          alternatePhoneNumber: "",
          propertyAddress: "",
          city: "",
          state: "",
          pinCode: "",
          propertyType: "",
        });
      })
      .catch((err) => {
        setMessage("");

        if (err.response) {
          setError(err.response.data.message);
        } else {
          setError("Something went wrong");
        }
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow">
            <div className="card-header bg-success text-white">
              <h3 className="text-center mb-0">
                Solar Panel Installation Booking
              </h3>
            </div>

            <div className="card-body">
              {message && (
                <div className="alert alert-success">{message}</div>
              )}

              {error && (
                <div className="alert alert-danger">{error}</div>
              )}

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Booking ID</label>
                  <input
                    type="text"
                    className="form-control"
                    name="bookingId"
                    value={input.bookingId}
                    onChange={inputHandler}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Customer Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="customerName"
                    value={input.customerName}
                    onChange={inputHandler}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={input.email}
                    onChange={inputHandler}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phoneNumber"
                    value={input.phoneNumber}
                    onChange={inputHandler}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">
                    Alternate Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="alternatePhoneNumber"
                    value={input.alternatePhoneNumber}
                    onChange={inputHandler}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Property Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="propertyAddress"
                    value={input.propertyAddress}
                    onChange={inputHandler}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    value={input.city}
                    onChange={inputHandler}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">State</label>
                  <input
                    type="text"
                    className="form-control"
                    name="state"
                    value={input.state}
                    onChange={inputHandler}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">PIN Code</label>
                  <input
                    type="text"
                    className="form-control"
                    name="pinCode"
                    value={input.pinCode}
                    onChange={inputHandler}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Property Type</label>
                  <select
                    className="form-select"
                    name="propertyType"
                    value={input.propertyType}
                    onChange={inputHandler}
                  >
                    <option value="">Select Property Type</option>
                    <option value="House">House</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Industrial">Industrial</option>
                  </select>
                </div>

                <div className="col-12 text-center mt-4">
                  <button
                    className="btn btn-success px-5"
                    onClick={readValues}
                  >
                    Book Installation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;