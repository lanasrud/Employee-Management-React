import { useNavigate } from "react-router-dom";

function EmployeeTable({ employees, onView, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <h3>Employees</h3>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No employees added yet
              </td>
            </tr>
          ) : (
            employees.map((emp, index) => (
              <tr key={index}>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.department}</td>
                <td>{emp.role}</td>
                <td>
                  <button
                    className="view-btn"
                    onClick={() => {
                      onView(emp);
                      navigate("/employee");
                    }}
                  >
                    View
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => onDelete(emp.email)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
