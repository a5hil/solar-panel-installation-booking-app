import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const EditSolar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [input, setInput] = useState(location.state ?? {
    bookingId: "",
    roofArea: "",
    roofType: "",
    installationDate: "",
    panelCapacity: "",
    noOfPanels: "",
    installationType: "",
    estimatedCost: "",
    batteryBackup: "",
    monthlyEnergyGeneration: "",
  });

  const inputHandler = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const saveChanges = () => {
    axios
      .put("http://localhost:3000/update-installation-details", input)
      .then(() => {
        navigate("/view-installation");
      })
      .catch((error) => {
        console.log(error);
        window.alert("Unable to update installation record.");
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
                <h3 className="text-center mb-0">Edit Solar Installation</h3>
              </div>

              <div className="card-body">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Booking ID</label>
                    <input type="text" className="form-control" name="bookingId" value={input.bookingId} onChange={inputHandler} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Roof Area (sq.ft.)</label>
                    <input type="number" className="form-control" name="roofArea" value={input.roofArea} onChange={inputHandler} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Roof Type</label>
                    <select className="form-select" name="roofType" value={input.roofType} onChange={inputHandler}>
                      <option value="">Select Roof Type</option>
                      <option value="Concrete">Concrete</option>
                      <option value="Metal">Metal</option>
                      <option value="Tile">Tile</option>
                      <option value="Flat">Flat</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Installation Date</label>
                    <input type="date" className="form-control" name="installationDate" value={input.installationDate} onChange={inputHandler} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Panel Capacity (kW)</label>
                    <input type="number" step="0.1" className="form-control" name="panelCapacity" value={input.panelCapacity} onChange={inputHandler} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Number of Solar Panels</label>
                    <input type="number" className="form-control" name="noOfPanels" value={input.noOfPanels} onChange={inputHandler} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Installation Type</label>
                    <select className="form-select" name="installationType" value={input.installationType} onChange={inputHandler}>
                      <option value="">Select Installation Type</option>
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Estimated Cost</label>
                    <input type="number" className="form-control" name="estimatedCost" value={input.estimatedCost} onChange={inputHandler} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Battery Backup Required</label>
                    <select className="form-select" name="batteryBackup" value={input.batteryBackup} onChange={inputHandler}>
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Expected Monthly Energy Generation (kWh)</label>
                    <input type="number" className="form-control" name="monthlyEnergyGeneration" value={input.monthlyEnergyGeneration} onChange={inputHandler} />
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

export default EditSolar;
