import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const ViewCustomer = () => {
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredCustomers = customers.filter((customer) => {
    const searchValue = searchTerm.toLowerCase();

    return [
      customer.bookingId,
      customer.customerName,
      customer.email,
      customer.phoneNumber,
      customer.alternatePhoneNumber,
      customer.address,
      customer.city,
      customer.state,
      customer.pincode,
      customer.propertyType,
    ].some((field) => String(field ?? "").toLowerCase().includes(searchValue));
  });

  const handleDelete = (indexToDelete) => {
    const shouldDelete = window.confirm("Delete this customer record?");

    if (!shouldDelete) {
      return;
    }

    setCustomers((currentCustomers) =>
      currentCustomers.filter((_, index) => index !== indexToDelete)
    );

    axios
      .delete("http://localhost:3000/delete-customer-details", {
        data: customers[indexToDelete],
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
          Solar Panel Installation Bookings
        </h2>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

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
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredCustomers.map((value, index) => (
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
                  <td>
                    <div className="d-flex gap-2">
                      <Link
                        className="btn btn-sm btn-outline-primary"
                        to="/edit-customer"
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

export default ViewCustomer;