import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";

const ViewPayment = () => {
  const [payments, setPayments] = useState([]);

  const fetchData = () => {
    axios
      .post("http://localhost:3000/view-payment-details")
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
    <>
      <NavBar />

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
                <th>Balance Amount</th>
                <th>Payment Method</th>
                <th>Payment Status</th>
                <th>Payment Date</th>
                <th>Transaction Reference Number</th>
              </tr>
            </thead>

            <tbody>
              {payments.map((value, index) => (
                <tr key={index}>
                  <td>{value.bookingId}</td>
                  <td>{value.paymentId}</td>
                  <td>{value.customerName}</td>
                  <td>{value.totalAmount}</td>
                  <td>{value.balanceAmount}</td>
                  <td>{value.paymentMethod}</td>
                  <td>{value.paymentStatus}</td>
                  <td>{value.paymentDate}</td>
                  <td>{value.TransactionRefNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ViewPayment;