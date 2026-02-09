import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeProfile from "./components/EmployeeProfile";
import "./App.css";

function Dashboard({ employees, addEmployee, onView, onDelete }) {
  return (
    <div className="page">
      <div className="app-card">
        <h1 className="title">Employee Management</h1>

        <EmployeeForm addEmployee={addEmployee} />

        <EmployeeTable
          employees={employees}
          onView={onView}
          onDelete={onDelete}
        />
      </div>
    </div>
  );
}

function App() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteEmployee = (email) => {
    setEmployees(employees.filter((e) => e.email !== email));
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Dashboard
            employees={employees}
            addEmployee={addEmployee}
            onView={setSelectedEmployee}
            onDelete={deleteEmployee}
          />
        }
      />

      <Route
        path="/employee"
        element={
          <div className="page">
            <EmployeeProfile employee={selectedEmployee} />
          </div>
        }
      />
    </Routes>
  );
}

export default App;