import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user || "Guest";
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // if no token, redirect to login
      navigate("/");
      return;
    }

    fetch("http://127.0.0.1:8000/api/employees/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch employees");
        return res.json();
      })
      .then((data) => setEmployees(data))
      .catch((err) => console.error("Error:", err))
      .finally(() => setLoading(false));
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Welcome, {user}!</h2>
      <p>This is your Payroll Dashboard.</p>

      <h3>Employees List:</h3>
      {loading ? (
        <p>Loading employees...</p>
      ) : employees.length > 0 ? (
        <ul>
          {employees.map((emp) => (
            <li key={emp.id}>
              {emp.name} – {emp.position} – ${emp.salary}
            </li>
          ))}
        </ul>
      ) : (
        <p>No employees found.</p>
      )}
    </div>
  );
}
