import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewCustomer = () => {
  const [customers, setCustomers] = useState([]);

  const fetchData = () => {
    axios
      .post("http://localhost:3000/view-customers")
      .then((response) => {
        setCustomers(response.data);
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
        Solar Panel Installation Bookings
      </h2>

      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-success">
            <tr>
              <th>Booking ID</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Alternate Phone</th>
              <th>Property Address</th>
              <th>City</th>
              <th>State</th>
              <th>PIN Code</th>
              <th>Property Type</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((value, index) => (
              <tr key={index}>
                <td>{value.bookingId}</td>
                <td>{value.customerName}</td>
                <td>{value.email}</td>
                <td>{value.phoneNumber}</td>
                <td>{value.alternatePhoneNumber}</td>
                <td>{value.address}</td>
                <td>{value.city}</td>
                <td>{value.state}</td>
                <td>{value.pincode}</td>
                <td>{value.propertyType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewCustomer;