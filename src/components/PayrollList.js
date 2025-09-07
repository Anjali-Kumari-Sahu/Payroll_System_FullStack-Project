import React, { useEffect, useState } from "react";
import { getPayroll, createPayroll } from "../api";

export default function PayrollList() {
  const [records, setRecords] = useState([]);
  const [form, setForm] = useState({ employee: "", month: "", basic_salary: "", bonus: "", deductions: "" });

  useEffect(() => {
    getPayroll().then(res => setRecords(res.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    createPayroll(form).then(() => {
      getPayroll().then(res => setRecords(res.data));
    });
  };

  return (
    <div>
      <h3>Payroll Records</h3>
      <ul>
        {records.map(rec => (
          <li key={rec.id}>
            Employee {rec.employee} — {rec.month} → Net Salary: ${rec.net_salary}
          </li>
        ))}
      </ul>

      <h3>Add Payroll Record</h3>
      <form onSubmit={handleSubmit}>
        <input placeholder="Employee ID" onChange={e => setForm({...form, employee: e.target.value})} />
        <input placeholder="Month" onChange={e => setForm({...form, month: e.target.value})} />
        <input placeholder="Basic Salary" onChange={e => setForm({...form, basic_salary: e.target.value})} />
        <input placeholder="Bonus" onChange={e => setForm({...form, bonus: e.target.value})} />
        <input placeholder="Deductions" onChange={e => setForm({...form, deductions: e.target.value})} />
        <button type="submit">Add Payroll</button>
      </form>
    </div>
  );
}
