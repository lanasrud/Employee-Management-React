import { useState } from "react";

function EmployeeForm({ addEmployee }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    role: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.department || !formData.role) {
      alert("All fields required");
      return;
    }

    addEmployee(formData);

    setFormData({
      name: "",
      email: "",
      department: "",
      role: ""
    });
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h3>Add New Employee</h3>

      <input
        type="text"
        name="name"
        placeholder="Full name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <select
        name="department"
        value={formData.department}
        onChange={handleChange}
      >
        <option value="">Select department</option>
        <option value="Sales">Sales</option>
        <option value="Engineering">Engineering</option>
        <option value="HR">HR</option>
      </select>

      <input
        type="text"
        name="role"
        placeholder="Role"
        value={formData.role}
        onChange={handleChange}
      />

      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;
