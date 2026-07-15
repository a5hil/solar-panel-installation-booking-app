import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewSolar = () => {
  const [installations, setInstallations] = useState([]);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/")
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

  return (
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
            </tr>
          </thead>

          <tbody>
            {installations.length > 0 ? (
              installations.map((value, index) => (
                <tr key={index}>
                  <td>{value.bookingId}</td>
                  <td>{value.roofArea}</td>
                  <td>{value.roofType}</td>
                  <td>{value.installationDate}</td>
                  <td>{value.panelCapacity}</td>
                  <td>{value.numberOfSolarPanels}</td>
                  <td>{value.installationType}</td>
                  <td>{value.estimatedCost}</td>
                  <td>{value.batteryBackupRequired}</td>
                  <td>{value.expectedMonthlyEnergyGeneration}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="text-center">
                  No solar installation records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewSolar;