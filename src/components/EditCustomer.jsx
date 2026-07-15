import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const EditCustomer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [input, setInput] = useState(location.state ?? {
    bookingId: "",
    customerName: "",
    email: "",
    phoneNumber: "",
    alternatePhoneNumber: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    propertyType: "",
  });

  const inputHandler = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const saveChanges = () => {
    axios
      .put("http://localhost:3000/update-customer-details", input)
      .then(() => {
        navigate("/view-customer");
      })
      .catch((error) => {
        console.log(error);
        window.alert("Unable to update customer record.");
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
                <h3 className="text-center mb-0">Edit Customer</h3>
              </div>

              <div className="card-body">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Booking ID</label>
                    <input type="text" className="form-control" name="bookingId" value={input.bookingId} onChange={inputHandler} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Customer Name</label>
                    <input type="text" className="form-control" name="customerName" value={input.customerName} onChange={inputHandler} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={input.email} onChange={inputHandler} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" name="phoneNumber" value={input.phoneNumber} onChange={inputHandler} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Alternate Phone Number</label>
                    <input type="tel" className="form-control" name="alternatePhoneNumber" value={input.alternatePhoneNumber} onChange={inputHandler} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Property Address</label>
                    <input type="text" className="form-control" name="address" value={input.address} onChange={inputHandler} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">City</label>
                    <input type="text" className="form-control" name="city" value={input.city} onChange={inputHandler} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">State</label>
                    <input type="text" className="form-control" name="state" value={input.state} onChange={inputHandler} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">PIN Code</label>
                    <input type="text" className="form-control" name="pincode" value={input.pincode} onChange={inputHandler} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Property Type</label>
                    <select className="form-select" name="propertyType" value={input.propertyType} onChange={inputHandler}>
                      <option value="">Select Property Type</option>
                      <option value="House">House</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Industrial">Industrial</option>
                    </select>
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

export default EditCustomer;
