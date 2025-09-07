import React, { useEffect, useState } from "react";
import { getEmployees, createEmployee } from "../api";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({ first_name: "", last_name: "", email: "", position: "", salary: "" });

  useEffect(() => {
    getEmployees().then(res => setEmployees(res.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    createEmployee(form).then(() => {
      getEmployees().then(res => setEmployees(res.data));
    });
  };

  return (
    <div>
      <h3>Employees</h3>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>
            {emp.first_name} {emp.last_name} — {emp.position} (${emp.salary})
          </li>
        ))}
      </ul>

      <h3>Add Employee</h3>
      <form onSubmit={handleSubmit}>
        <input placeholder="First Name" onChange={e => setForm({...form, first_name: e.target.value})} />
        <input placeholder="Last Name" onChange={e => setForm({...form, last_name: e.target.value})} />
        <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
        <input placeholder="Position" onChange={e => setForm({...form, position: e.target.value})} />
        <input placeholder="Salary" onChange={e => setForm({...form, salary: e.target.value})} />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}
