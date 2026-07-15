import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const ViewTeam = () => {
  const [teams, setTeams] = useState([]);

  const fetchData = () => {
    axios
      .post("http://localhost:3000/view-installation-team-details")
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

  const handleDelete = (indexToDelete) => {
    const shouldDelete = window.confirm("Delete this team record?");

    if (!shouldDelete) {
      return;
    }

    setTeams((currentTeams) =>
      currentTeams.filter((_, index) => index !== indexToDelete)
    );

    axios
      .delete("http://localhost:3000/delete-installation-team-details", {
        data: teams[indexToDelete],
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
                <th>Action</th>
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
                  <td>
                    <div className="d-flex gap-2">
                      <Link
                        className="btn btn-sm btn-outline-primary"
                        to="/edit-team"
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

export default ViewTeam;