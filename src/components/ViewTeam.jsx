import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewTeam = () => {
  const [teams, setTeams] = useState([]);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/view_team")
      .then((response) => {
        setTeams(response.data);
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
        Technician Team Details
      </h2>

      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-success">
            <tr>
              <th>Booking ID</th>
              <th>Technician Team ID</th>
              <th>Technician Team Name</th>
              <th>Team Leader Name</th>
              <th>Team Contact Number</th>
              <th>Number of Technicians</th>
              <th>Assigned Vehicle Number</th>
              <th>Service Zone Number</th>
              <th>Installation Status</th>
              <th>Expected Completion Date</th>
            </tr>
          </thead>

          <tbody>
            {teams.map((value, index) => (
              <tr key={index}>
                <td>{value.bookingId}</td>
                <td>{value.technicianTeamId}</td>
                <td>{value.technicianTeamName}</td>
                <td>{value.teamLeaderName}</td>
                <td>{value.teamContactNumber}</td>
                <td>{value.numberOfTechnicians}</td>
                <td>{value.assignedVehicleNumber}</td>
                <td>{value.serviceZoneNumber}</td>
                <td>{value.installationStatus}</td>
                <td>{value.expectedCompletionDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewTeam;