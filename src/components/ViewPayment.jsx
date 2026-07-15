import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  const handleDelete = (indexToDelete) => {
    const shouldDelete = window.confirm("Delete this payment record?");

    if (!shouldDelete) {
      return;
    }

    setPayments((currentPayments) =>
      currentPayments.filter((_, index) => index !== indexToDelete)
    );

    axios
      .delete("http://localhost:3000/delete-payment-details", {
        data: payments[indexToDelete],
      })
      .catch((error) => {
        console.log(error);
        fetchData();
      });
  };

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
                <th>Action</th>
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
                  <td>
                    <div className="d-flex gap-2">
                      <Link
                        className="btn btn-sm btn-outline-primary"
                        to="/edit-payment"
                        state={value}
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
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