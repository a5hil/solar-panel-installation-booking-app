import axios from "axios";
import React, { useState } from "react";

const AddPayment = () => {
  const [input, changeInput] = useState({
    bookingId: "",
    paymentId: "",
    customerName: "",
    totalAmount: "",
    advanceAmount: "",
    balanceAmount: "",
    paymentMethod: "",
    paymentStatus: "",
    paymentDate: "",
    transactionReferenceNumber: "",
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
        setMessage("Payment added successfully");
        setError("");

        changeInput({
          bookingId: "",
          paymentId: "",
          customerName: "",
          totalAmount: "",
          advanceAmount: "",
          balanceAmount: "",
          paymentMethod: "",
          paymentStatus: "",
          paymentDate: "",
          transactionReferenceNumber: "",
        });
      })
      .catch((err) => {
        setMessage("");

        if (err.response) {
          setError(err.response.data.message);
        } else {
          setError("Error");
        }
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow">
            <div className="card-header bg-success text-white">
              <h3 className="text-center mb-0">
                Solar Panel Payment Details
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
                  <label className="form-label">Payment ID</label>
                  <input
                    type="text"
                    className="form-control"
                    name="paymentId"
                    value={input.paymentId}
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
                  <label className="form-label">Total Amount</label>
                  <input
                    type="number"
                    className="form-control"
                    name="totalAmount"
                    value={input.totalAmount}
                    onChange={inputHandler}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Advance Amount</label>
                  <input
                    type="number"
                    className="form-control"
                    name="advanceAmount"
                    value={input.advanceAmount}
                    onChange={inputHandler}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Balance Amount</label>
                  <input
                    type="number"
                    className="form-control"
                    name="balanceAmount"
                    value={input.balanceAmount}
                    onChange={inputHandler}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Payment Method</label>
                  <select
                    className="form-select"
                    name="paymentMethod"
                    value={input.paymentMethod}
                    onChange={inputHandler}
                  >
                    <option value="">Select Payment Method</option>
                    <option value="Cash">Cash</option>
                    <option value="UPI">UPI</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Debit Card">Debit Card</option>
                    <option value="Net Banking">Net Banking</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label">Payment Status</label>
                  <select
                    className="form-select"
                    name="paymentStatus"
                    value={input.paymentStatus}
                    onChange={inputHandler}
                  >
                    <option value="">Select Status</option>
                    <option value="Pending">Pending</option>
                    <option value="Partial">Partial</option>
                    <option value="Paid">Paid</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label">Payment Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="paymentDate"
                    value={input.paymentDate}
                    onChange={inputHandler}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">
                    Transaction Reference Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="transactionReferenceNumber"
                    value={input.transactionReferenceNumber}
                    onChange={inputHandler}
                  />
                </div>

                <div className="col-12 text-center mt-4">
                  <button
                    className="btn btn-success px-5"
                    onClick={readValues}
                  >
                    Add Payment
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

export default AddPayment;