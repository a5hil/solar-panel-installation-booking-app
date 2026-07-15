import axios from "axios";
import { useState } from "react";
import NavBar from "./NavBar";

const AddTeam = () => {
  const [input, changeInput] = useState({
    bookingId: "",
    technicianTeamId: "",
    technicianTeamName: "",
    teamLeaderName: "",
    teamContactNumber: "",
    numberOfTechnicians: "",
    assignedVehicleNumber: "",
    serviceZoneNumber: "",
    installationStatus: "",
    expectedCompletionDate: "",
  });

  const inputHandler = (event) => {
    changeInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const readValue = () => {
    console.log(input);

    axios
      .post("http://localhost:3000/add-installation-team-details", input)
      .then((response) => {
        console.log(response.data);
        alert("Team added successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Error adding team");
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
                <h3 className="text-center mb-0">Technician Team Assignment</h3>
              </div>

              <div className="card-body">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Booking ID</label>
                    <input type="text" className="form-control" name="bookingId" value={input.bookingId} onChange={inputHandler} />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Technician Team ID</label>
                    <input type="text" className="form-control" name="technicianTeamId" value={input.technicianTeamId} onChange={inputHandler} />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Technician Team Name</label>
                    <input type="text" className="form-control" name="technicianTeamName" value={input.technicianTeamName} onChange={inputHandler} />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Team Leader Name</label>
                    <input type="text" className="form-control" name="teamLeaderName" value={input.teamLeaderName} onChange={inputHandler} />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Team Contact Number</label>
                    <input type="tel" className="form-control" name="teamContactNumber" value={input.teamContactNumber} onChange={inputHandler} />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Number of Technicians</label>
                    <input type="number" className="form-control" name="numberOfTechnicians" value={input.numberOfTechnicians} onChange={inputHandler} />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Assigned Vehicle Number</label>
                    <input type="text" className="form-control" name="assignedVehicleNumber" value={input.assignedVehicleNumber} onChange={inputHandler} />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Service Zone Number</label>
                    <input type="text" className="form-control" name="serviceZoneNumber" value={input.serviceZoneNumber} onChange={inputHandler} />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Installation Status</label>
                    <select className="form-select" name="installationStatus" value={input.installationStatus} onChange={inputHandler}>
                      <option value="">Select Status</option>
                      <option value="Pending">Pending</option>
                      <option value="Assigned">Assigned</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Expected Completion Date</label>
                    <input type="date" className="form-control" name="expectedCompletionDate" value={input.expectedCompletionDate} onChange={inputHandler} />
                  </div>

                  <div className="col-12 text-center mt-4">
                    <button className="btn btn-success px-5" onClick={readValue}>
                      Add Team
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

export default AddTeam;
