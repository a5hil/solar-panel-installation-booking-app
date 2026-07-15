import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewPayment = () => {
  const [payments, setPayments] = useState([]);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/")
      .then((response) => {
        setPayments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container-fluid mt-5 px-5">
      <h2 className="text-center mb-4 text-success">
        Payment Details
      </h2>

      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-success">
            <tr>
              <th>Booking ID</th>
              <th>Payment ID</th>
              <th>Customer Name</th>
              <th>Total Amount</th>
              <th>Advance Amount</th>
              <th>Balance Amount</th>
              <th>Payment Method</th>
              <th>Payment Status</th>
              <th>Payment Date</th>
              <th>Transaction Reference Number</th>
            </tr>
          </thead>

          <tbody>
            {payments.length > 0 ? (
              payments.map((value, index) => (
                <tr key={index}>
                  <td>{value.bookingId}</td>
                  <td>{value.paymentId}</td>
                  <td>{value.customerName}</td>
                  <td>{value.totalAmount}</td>
                  <td>{value.advanceAmount}</td>
                  <td>{value.balanceAmount}</td>
                  <td>{value.paymentMethod}</td>
                  <td>{value.paymentStatus}</td>
                  <td>{value.paymentDate}</td>
                  <td>{value.transactionReferenceNumber}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="text-center">
                  No payment records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewPayment;