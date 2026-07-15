import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const ViewSolar = () => {
  const [installations, setInstallations] = useState([]);

  const fetchData = () => {
    axios
      .post("http://localhost:3000/view-installation-details")
      .then((response) => {
        setInstallations(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (indexToDelete) => {
    const shouldDelete = window.confirm("Delete this installation record?");

    if (!shouldDelete) {
      return;
    }

    setInstallations((currentInstallations) =>
      currentInstallations.filter((_, index) => index !== indexToDelete)
    );

    axios
      .delete("http://localhost:3000/delete-installation-details", {
        data: installations[indexToDelete],
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
          Solar Installation Details
        </h2>

        <div className="table-responsive">
          <table className="table table-bordered table-striped table-hover">
            <thead className="table-success">
              <tr>
                <th>Booking ID</th>
                <th>Roof Area (sq.ft.)</th>
                <th>Roof Type</th>
                <th>Installation Date</th>
                <th>Panel Capacity (kW)</th>
                <th>Number of Solar Panels</th>
                <th>Installation Type</th>
                <th>Estimated Cost</th>
                <th>Battery Backup Required</th>
                <th>Expected Monthly Energy Generation (kWh)</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {installations.map((value, index) => (
                <tr key={index}>
                  <td>{value.bookingId}</td>
                  <td>{value.roofArea}</td>
                  <td>{value.roofType}</td>
                  <td>{value.installationDate}</td>
                  <td>{value.panelCapacity}</td>
                  <td>{value.noOfPanels}</td>
                  <td>{value.installationType}</td>
                  <td>{value.estimatedCost}</td>
                  <td>{value.batteryBackup}</td>
                  <td>{value.monthlyEnergyGeneration}</td>
                  <td>
                    <div className="d-flex gap-2">
                      <Link
                        className="btn btn-sm btn-outline-primary"
                        to="/edit-installation"
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

export default ViewSolar;