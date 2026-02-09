import { useNavigate } from "react-router-dom";

function EmployeeProfile({ employee }) {
  const navigate = useNavigate();

  if (!employee) {
    return (
      <div className="profile-page">
        <h2>No employee selected</h2>
        <button onClick={() => navigate("/")}>Back</button>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <h2>Employee Profile</h2>

      <p><strong>Name:</strong> {employee.name}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Department:</strong> {employee.department}</p>
      <p><strong>Role:</strong> {employee.role}</p>

      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
}

export default EmployeeProfile;
