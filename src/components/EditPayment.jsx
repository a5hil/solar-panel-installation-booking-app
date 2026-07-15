import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const EditPayment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [input, setInput] = useState(location.state ?? {
    bookingId: "",
    paymentId: "",
    customerName: "",
    totalAmount: "",
    balanceAmount: "",
    paymentMethod: "",
    paymentStatus: "",
    paymentDate: "",
    TransactionRefNumber: "",
    expectedCompletionDate: "",
  });

  const inputHandler = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const saveChanges = () => {
    axios
      .put("http://localhost:3000/update-payment-details", input)
      .then(() => {
        navigate("/view-payment");
      })
      .catch((error) => {
        console.log(error);
        window.alert("Unable to update payment record.");
      });
  };

  return (
    <>
      <NavBar />

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow">
              <div className="card-header bg-success text-white">
                <h3 className="text-center mb-0">Edit Payment</h3>
              </div>

              <div className="card-body">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Booking ID</label>
                    <input type="text" className="form-control" name="bookingId" value={input.bookingId} onChange={inputHandler} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Payment ID</label>
                    <input type="text" className="form-control" name="paymentId" value={input.paymentId} onChange={inputHandler} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Customer Name</label>
                    <input type="text" className="form-control" name="customerName" value={input.customerName} onChange={inputHandler} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Total Amount</label>
                    <input type="number" className="form-control" name="totalAmount" value={input.totalAmount} onChange={inputHandler} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Balance Amount</label>
                    <input type="number" className="form-control" name="balanceAmount" value={input.balanceAmount} onChange={inputHandler} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Payment Method</label>
                    <input type="text" className="form-control" name="paymentMethod" value={input.paymentMethod} onChange={inputHandler} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Payment Status</label>
                    <input type="text" className="form-control" name="paymentStatus" value={input.paymentStatus} onChange={inputHandler} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Payment Date</label>
                    <input type="date" className="form-control" name="paymentDate" value={input.paymentDate} onChange={inputHandler} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Transaction Reference Number</label>
                    <input type="text" className="form-control" name="TransactionRefNumber" value={input.TransactionRefNumber} onChange={inputHandler} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Expected Completion Date</label>
                    <input type="date" className="form-control" name="expectedCompletionDate" value={input.expectedCompletionDate} onChange={inputHandler} />
                  </div>
                  <div className="col-12 text-center mt-4">
                    <button className="btn btn-success px-5" onClick={saveChanges}>
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPayment;
